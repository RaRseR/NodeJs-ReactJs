import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import About from "../../Pages/About";
import Home from "../../Pages/Home";
export default function SwitchController() {
    return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
    </Switch>);
}
