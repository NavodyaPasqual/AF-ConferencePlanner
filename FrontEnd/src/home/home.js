import React, {Component} from 'react';
import './css/home.css'
import MenuCard from "./menuCard";
import ParalaxContainer from "./paralaxContainer";
import slide1 from './image/s1.png';
import slide2 from './image/s2.png';
import slide3 from './image/s3.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slide1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO ICAF</h5>
                                <p>THE INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWROKS</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO ICAF</h5>
                                 <p>THE INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWROKS</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO ICAF</h5>
                                <p>THE INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWROKS</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br/><br/><br/><br/>
                <MenuCard/>
                <ParalaxContainer/>
                <div className="container p-3">
                    <div className="container p-3">
                        <div className="container p-3">
                            <div className="container p-3">
                                <div className="container p-3">
                                    <h2><b>ICAF</b></h2>
                                    <p>
                                        The International Conference on Application Framework (ICAF) is organized by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals to present the latest findings and research output and practical deployments in the Computer Science and Information Technology domains. Primary objective of the ICAF is to uplift the research culture and the quality of research done by Sri Lankan researchers. This conference will create a platform for national and international researchers to showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work. ICAF 2019 and ICAF 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available in IEEE Xplore digital library
                                    </p>
                                    <br/>
                                    <ul className="list-unstyled">
                                        <li><h4><b>Objectives</b></h4>
                                            <ul>
                                                <li><p>To promote advanced research culture among academic and cooperate community around the globe.</p></li>
                                                <li><p>To showcase research achievements of our researchers locally and internationally.</p></li>
                                                <li><p>To create a platform for networking and collaborative research and development activities among national and international researchers.</p></li>
                                                <li><p>To encourage services to the society through innovative products and new inventions.</p></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;