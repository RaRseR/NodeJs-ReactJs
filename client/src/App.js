import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import PagesSwitch from "./PagesSwitch";

function App() {
    return (
        <Router>
            <Header />
            <PagesSwitch />
        </Router>
    );
}

export default App;
