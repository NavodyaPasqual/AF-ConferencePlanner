import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./home/navBar";

function App() {
    return (
        <div>
            <Router>
                <NavBar/>
            </Router>
        </div>
    )
}
ReactDOM.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)