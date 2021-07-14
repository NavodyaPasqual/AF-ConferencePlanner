import React, {Component} from 'react';
import conference from "./image/conference.png"
import workshop from "./image/workshop.png"
import research from "./image/research.png"
import './css/ParalaxStyles.css'

class MenuCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container p-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={conference} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><b>Conferences</b></h5>
                                <p className="card-text">Immerse yourself in bold thinking and innovation.
                                    Discover which breakthrough technologies and global trends have staying
                                    power and get the trustworthy, actionable guidance you need for your
                                    strategic and visionary planning.</p>
                                <a href="/view" className="button button2">Get start</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={workshop} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><b>WorkShop</b></h5>
                                <p className="card-text"> Witness the birth and development of a new era:
                                    the information age. Discover how Information Technology has transformed the modern workplace and how
                                    pervasive in the development of new knowledge and wealth.</p>
                                <a href="/workshop" className="button button2">Get start</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={research} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><b>Research</b></h5>
                                <p className="card-text">Exhibit expertise knowledge in the any area of Information
                                    Technology. Discover open association of excellent Professionals,
                                    and Scholars and help researchers & professionals to carry and
                                    accomplish their research</p>
                                <a href="/research-paper" className="button button2">Get start</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuCard;