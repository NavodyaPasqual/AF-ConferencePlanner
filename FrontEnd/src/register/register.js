import React, {Component} from 'react';
import axios from 'axios'; 
import {Link} from "react-router-dom";
import img from '../home/image/login-illus-1.svg';

//Initial states of input fields
const initialState = {
    name:'',
    contactNo:'',
    email: '',
    password: '',
    type:''
}

class Registraion extends Component {
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
        let user = {
            name: this.state.name,
            contactNo: this.state.contactNo,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        }

        console.log(user);
        //call the end point and pass the values using axios
        console.log('data to send', user);
        axios.post('http://localhost:8080/user/signUp', user )
            .then(response => {
                alert('Data successfully inserted')
                localStorage.setItem('User',JSON.stringify(user));
                this.props.history.push('/');

            })
            .catch(error => {
                console.log(error.message );
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                <div className="p-3 row">
                    <div className="col-md-6">
                    <h1>Welcome !</h1>
                    <div className="p-3">
                        <form onSubmit={this.onSubmit} className="row g-3">
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    required="true"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="contactNo" className="form-label">Contact Number</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactNo"
                                        name="contactNo"
                                        required="true"
                                        value={this.state.contactNo}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="far fa-envelope"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        required="true"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    required="true"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="type" className="form-label">User type</label>
                                <select
                                    className="form-control"
                                    onChange={this.onChange}
                                    id='type'
                                    required="true"
                                    value={this.state.type}
                                    name="type"
                                >
                                    <option value="select">---Select---</option>
                                    <option value="Attendee">Attendee</option>
                                    <option value="Presenter">Work Shop Presenter</option>
                                    <option value="Reviewer">Reviewer</option>
                                    <option value="Researcher">Researcher</option>
                                    <option value="Editor">Editor</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                           <Link  to="/signin">Already have a account ? Sign In</Link>
                        </form>

                    </div>
                    </div>
                    <div className="col-md-6">
                         <img src={img} alt="" className="mt-5"/>
                    </div>
                </div>
                   
            </div>
        )
    }
}

export default Registraion;