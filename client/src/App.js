import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import SwitchController from "./Components/SwitchController";

function App() {
  return (
    <Router>
      <Header />
      <SwitchController/>
    </Router>
  );
}

export default App;
