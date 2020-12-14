import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import {IsUserRedirect, ProtectedRoute} from './middleware/middleware-routes'
import useAuth from "./hooks/auth.hook";

function App() {
    const {user} = useAuth();

    return (
        <Router>
            <Switch>
                <Route path={ROUTES.SIGN_IN}>
                    <IsUserRedirect
                        user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_IN}
                    />

                    <Signin />
                </Route>

                <Route path={ROUTES.SIGN_UP}>
                    <IsUserRedirect
                        user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_UP}
                    />

                    <Signup />
                </Route>

                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>

                <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>

                <Redirect to={ROUTES.HOME}/>
            </Switch>
        </Router>
    );
}

export default App;
