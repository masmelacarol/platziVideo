import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layaout from '../components/Layout';

const App = () => (
    <BrowserRouter>
        <Layaout>
            <Switch>
                <Route exact path="/" component={Home} ></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>        
                <Route component={NotFound}></Route>        
            </Switch>        
        </Layaout>
    </BrowserRouter>
);

export default App;