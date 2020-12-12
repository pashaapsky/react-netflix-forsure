import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>

                <Route path={ROUTES.BROWSE}>
                    <Browse />
                </Route>

                <Route path={ROUTES.SIGN_IN}>
                    <Signin />
                </Route>

                <Route path={ROUTES.SIGN_UP}>
                    <Signup />
                </Route>

                <Redirect to={ROUTES.HOME}/>
            </Switch>
        </Router>
    );
}

export default App;
