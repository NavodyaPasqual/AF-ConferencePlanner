import React, {Component} from 'react';
import image from "./img/contact.png";
import './style/contactUs.css';
import axios from 'axios'

//Initial states of input fields
const initialState = {
    name:'',
    email:'',
    subject: '',
    message: ''
}

class ContactUs extends Component {
    constructor(props) {
        super(props);
        //bind onChange function
        this.onChange = this.onChange.bind(this);
        //bind onSubmit function
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    //to store values into input fields
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    //To pass values into database
    onSubmit(e) {
        e.preventDefault();
        //create a object to send to database
        let contactus = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        //call the end point and pass the values using axios
        console.log('data to send', contactus);
        axios.post('http://localhost:8080/contact-us/create', contactus)
            .then(response => {
                alert('Thanks for Your Comment')
                this.state.name=''
                this.state.email=''
                this.state.subject=''
                this.state.message=''
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container p-3">
                <div className="container p-3">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col p-3">
                            <div className="raw p-3">
                                <h2><b>LEAVE A COMMENT</b></h2>
                                <br/>
                                <form onSubmit={this.onSubmit} className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            value={this.state.subject}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label">Your Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.onChange}>
                                </textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-danger">SUBMIT</button>
                                </form><br/>
                            </div>
                        </div>
                        <div className="col p-3">
                            <div className="raw p-3">
                                <h2><b>GET IN TOUCH</b></h2>
                                <br/>
                                <img src={image} className="card-img-top" alt="..."/>
                                <ul className="footer-center">
                                    <div>
                                        <i className="fa fa-map-marker"/>
                                        <p>SLIIT , New Kandy Road, Malabe, Sri Lanka</p>
                                    </div>

                                    <div>
                                        <i className="fa fa-phone"/>
                                        <p>+94 (0) 714914133</p>
                                    </div>

                                    <div>
                                        <i className="fa fa-envelope"/>
                                        <p><a href="#">info@icac.com</a></p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;