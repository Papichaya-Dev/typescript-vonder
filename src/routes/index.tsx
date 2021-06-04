import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import all pages
import Home from '../pages/Home';
import Calculate from '../pages/Calculator';
import ExampleuseContext from '../pages/useContext';
import Test from 'pages/Test';
class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/calculate" component={Calculate} />
                <Route exact path="/ExampleuseContext" component={ExampleuseContext} />
                <Route exact path="/test" component={Test} />
            </Switch>
        );
    }
}

export default Routing;
