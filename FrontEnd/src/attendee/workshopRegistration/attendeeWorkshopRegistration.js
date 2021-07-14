import React, {Component} from 'react';
import axios from 'axios';
import Select from 'react-select';

//Initial states of input fields
const initialState = {
    name:'',
    contactNo:'',
    email: '',
    affiliation: '',
    interest: '',
    workshops: [],
    options: [],
    selectedWorkShop:[]
}

class AttendeeWorkshopRegistration extends Component {
    constructor(props) {
        super(props);
        //bind onChange function
        this.onChange = this.onChange.bind(this);
        //bind user define functions onSubjectSelect
        this.onWorkShopSelect = this.onWorkShopSelect.bind(this);
        //bind onSubmit function
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    //to get subjects array from the backend
    componentDidMount() {
        axios.get('http://localhost:8080/workshop/')
            .then(response => {
                this.setState({workshops: response.data.data}, () => {
                    let data = [];
                    this.state.workshops.map((item, index) =>{
                        let  workshop = {
                            value:item._id,
                            label:item.workShopTitle
                        }
                        data.push(workshop)
                    });
                    this.setState({options: data});
                })
            })
    }

    //to store values into input fields
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    onWorkShopSelect(e) {
        this.setState({selectedWorkShop: e ? e.map(item => item.value) : [] });
    }

    //To pass values into database
    onSubmit(e) {
        e.preventDefault();
        //create a object to send to database
        let attendee = {
            name: this.state.name,
            contactNo: this.state.contactNo,
            email: this.state.email,
            affiliation: this.state.affiliation,
            interest: this.state.interest,
            workshops: this.state.selectedWorkShop
        }
        //call the end point and pass the values using axios
        console.log('data to send', attendee);
        axios.post('http://localhost:8080/attendee/create', attendee )
            .then(response => {
                alert('Successfully registered')
                this.props.history.push('/workshop-attendee');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                <div className="p-3">
                    <h1>Registration for WorkShops</h1>
                    <div className="p-3">
                        <form onSubmit={this.onSubmit} className="row g-3">
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
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
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="affiliation" className="form-label">Affiliation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="affiliation"
                                    name="affiliation"
                                    value={this.state.affiliation}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="interest" className="form-label">Interested In</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="interest"
                                    name="interest"
                                    value={this.state.interest}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="workShop" className="form-label">WorkShop</label>
                                <Select
                                    options = {this.state.options}
                                    className="basic-multi-select"
                                    onChange={this.onWorkShopSelect}
                                    isMulti
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AttendeeWorkshopRegistration;