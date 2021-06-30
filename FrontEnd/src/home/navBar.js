import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


const isActive = (history, path) => {
    if(history.location.pathname === path){
        return { color: "#ff9900"}
    } else {
        return { color: "#ffffff"}
    }
};

const NavBar = ({history}) => (
    <div data-testid="nav-1">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Conference Planner</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/create-workshop')} to="/create-workshop">Workshop Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/workshop-attendee')} to="/workshop-attendee">Attendee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/workshop-payment')} to="/workshop-payment">Attendee Payment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/editor')} to="/editor">Conference</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/researcher')} to="/researcher">Researcher</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/reviewer')} to="/reviewer">Reviewer</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default withRouter(NavBar);
