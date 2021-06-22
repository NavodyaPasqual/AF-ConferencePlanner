import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div data-testid="nav-1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/subjectpage">Subjects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/create-subject">Create Subjects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/create-course">Create Course</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;