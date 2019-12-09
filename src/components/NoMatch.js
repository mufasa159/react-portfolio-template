import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';

function NoMatch() {
    return (
        <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
        </Switch>
    );
}

export default NoMatch;