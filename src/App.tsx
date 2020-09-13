import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import BusPanelView from "./view/BusPanelView";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={BusPanelView}/>
                <Redirect path='*' to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
