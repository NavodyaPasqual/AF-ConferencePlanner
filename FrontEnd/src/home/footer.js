import React, {Component} from 'react';
import './css/footer.css'
import './css/footer-distribution.css'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <footer className="footer-distributed">
                    <div className="footer-left">
                        <h3>I<span>CAF</span></h3>
                        <p className="footer-links">
                            <a  href="/">Home</a>
                            ·
                            <a className="mr-5" href="/view"> Conference</a>
                            ·
                            <a className="mr-5" href="/workshop"> WorkShop</a>
                        </p>

                        <p className="footer-company-name">ICAF &copy; 2019</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"/>
                            <p><span>SLIIT , New Kandy Road</span> Malabe, Sri Lanka</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"/>
                            <p>+94 (0) 714914133</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"/>
                            <p><a href="#">info@icaf.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the company</span>
                            The International Conference on Advancements in Computing (ICAC)
                            is aim to present the latest
                            findings and research output and practical deployments in Information
                            Technology.
                        </p>

                        <div className="footer-icons">

                            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="/"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;