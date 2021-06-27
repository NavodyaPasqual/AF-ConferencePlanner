import React, {Component} from 'react';
import axios from 'axios'

//Initial states of input fields
const initialState = {
    organizerName:'',
    organizerContactNo:'',
    organizerEmail: '',
    workShopTitle: '',
    description: '',
    proposalURL: '',
    estimatedDuration: 0,
    paymentAmount: 0
}

class CreateWorkShop extends Component {

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
        let workshop = {
            organizerName: this.state.organizerName,
            organizerContactNo: this.state.organizerContactNo,
            organizerEmail: this.state.organizerEmail,
            workShopTitle: this.state.workShopTitle,
            description: this.state.description,
            proposalURL: this.state.proposalURL,
            estimatedDuration: this.state.estimatedDuration,
            paymentAmount: this.state.paymentAmount
        }
        //call the end point and pass the values using axios
        console.log('data to send', workshop);
        axios.post('http://localhost:8080/workshop/create', workshop)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>WorkShop Registration</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="organizerName" className="form-label">Organizer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="organizerName"
                            name="organizerName"
                            value={this.state.organizerName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="organizerContactNo" className="form-label">Organizer Contact Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="organizerContactNo"
                            name="organizerContactNo"
                            value={this.state.organizerContactNo}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="organizerEmail" className="form-label">Organizer Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="organizerEmail"
                            placeholder="name@example.com"
                            name="organizerEmail"
                            value={this.state.organizerEmail}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="workShopTitle" className="form-label">Title of the WorkShop</label>
                        <input
                            type="text"
                            className="form-control"
                            id="workShopTitle"
                            name="workShopTitle"
                            value={this.state.workShopTitle}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="proposalURL" className="form-label">Proposal</label>
                        <input
                            type="file"
                            className="form-control"
                            id="proposalURL"
                            name="proposalURL"
                            value={this.state.proposalURL}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="estimatedDuration" className="form-label">Estimated Duration (In days)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="estimatedDuration"
                            name="estimatedDuration"
                            value={this.state.estimatedDuration}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="paymentAmount" className="form-label">Payment Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            id="paymentAmount"
                            name="paymentAmount"
                            value={this.state.paymentAmount}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>

        )
    }
}

export default CreateWorkShop;