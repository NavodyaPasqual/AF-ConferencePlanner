import React, {Component} from 'react';
import axios from 'axios'; 
import {Link} from "react-router-dom";
import img from '../home/image/security.svg';

//Initial states of input fields
const initialState = {
    email: '',
    password: '',
    type:''
}

class SignIn extends Component {
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
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        }

        console.log(user);
        //call the end point and pass the values using axios
        console.log('data to send', user);
        axios.post('http://localhost:8080/user/signin', user )
            .then(response => {
                alert('Welcome to ICAF')
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
                      <img src={img} alt="" className="mt-5" height="250px"/>
                    </div>
                    <div className="col-md-6">
                    <h1>Sign In</h1>
                    <div className="p-3">
                        <form onSubmit={this.onSubmit} className="row g-3">
                            <div className="col-md-12">
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

        
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                            <Link  to="/registration">Need a account ? Sign Up</Link>
                        </form>

                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;