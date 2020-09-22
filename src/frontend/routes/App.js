import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layaout from '../components/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
import Register from '../containers/Register';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Route exact path='/' component={isLogged ? Home : Login} />
        <Route exact path='/player/:id' component={isLogged ? Player : Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layaout>
  </BrowserRouter>
);

export default App;
