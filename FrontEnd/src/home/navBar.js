import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
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
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop">WorkShop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop/my">My WorkShops</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop/registration">WorkShop Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-attendee">Attendee</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-attendee/registration">Attendee Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-payment">Attendee payments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-payment/create">Attendee payment Submit</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/workshop">Admin workshop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/attendee-workshop">Admin Attendee</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/attendee-payments">Admin Payments</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="/editor">Conference</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/researcher">Researcher</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/research-paper">Research Papers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/research-payment-details">Research Payment Details</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/reviewer">Reviewer</a>
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