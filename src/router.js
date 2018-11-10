import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './component/About';
import ConnectHome from './container/ConnectHome';
import Index from './component/Index';


const BasicRoute = () => (
    <Switch>
        <Route exact path="/" component={ConnectHome}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/index" component={Index}/>
    </Switch>
);


export default BasicRoute;