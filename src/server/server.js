import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from 'helmet';
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import Layout from "../frontend/components/Layout";
import reducer from "../frontend/reducers";
import initialState from "../frontend/initialState";
import serverRoutes from "../frontend/routes/serverRoutes";

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === "development") {
  console.log("Development config");
  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const webpackServerConfig = {
    port: PORT,
    hot: true,
  };

  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
}else {
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  //El navegador no sabe desde donde se esta conectando la aplicacion 
  //usando: app.disable('x-powered-by');
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState) => {
  return `
        <!DOCTYPE html>
            <html>    
                <head>
                    <link rel="stylesheet" href="assets/app.css" type="text/css">
                    <title>Platzi Video</title>
                </head>    
                <body>
                    <div id="app">${html}</div>
                    <script id="preload">
                      // WARNING: See the following for security issues around embedding JSON in HTML:
                      // https://redux.js.org/recipes/server-rendering/#security-considerations
                      window.__PRELOADED_STATE__ = ${JSON.stringify(
                        preloadedState
                      ).replace(/</g, "\\u003c")}
                    </script>
                    <script src="assets/app.js" type="text/javascript"></script>
                </body>    
            </html>`;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout> {renderRoutes(serverRoutes)} </Layout>{" "}
      </StaticRouter>{" "}
    </Provider>
  );

  res.send(setResponse(html, preloadedState));
};

app.get("*", renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`server running in mode ${ENV} on port ${PORT}`);
});
