import React, {Component} from 'react';
import "./style/adminHome.css"
import workshop from './image/admin-workshop.png';
import attendee from './image/admin-attendee.png';
import atMoney from './image/admin-att-money.png';
import conference from './image/admin-conference.png'
import confospeackers from './image/admin-conference-speaker.png'
import research from './image/admin-research.png'
import user from './image/admin-user.png'

class AdminHome extends Component {
    render() {
        return (
            <div className="admin-container"><br/>
                <h3><i className="fas fa-tachometer-alt">&nbsp;&nbsp;&nbsp;</i>DASHBOARD</h3>
                <div className="row row-cols-1 p-3 row-cols-md-3 g-4"><br/>
                    <div className="col">
                        <a href="/admin/workshop">
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <h6>WorkShop</h6>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={workshop} height="100px"/>
                                </div>
                            </div>

                        </a>
                    </div>
                    <div className="col">
                        <a href="/admin/attendee-workshop">
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <h6>WorkShop Attendee</h6>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={attendee} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/admin/attendee-payments">
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <h6>Attendee Payments</h6>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={atMoney} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/admin-editor">
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <h6>Conference</h6>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={conference} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/research-paper">
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <h6>Research</h6>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={research} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/user-details">
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <h6>User</h6>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={user} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminHome;