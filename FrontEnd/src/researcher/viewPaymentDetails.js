import React, {Component} from 'react';
import axios from "axios";

class ViewPaymentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentDetails: []
        }
    }
    deletePaymentDetails(e, id){
        axios.delete(`http://localhost:8080/researchpaperpayment/delete/${id}`).then(response => {
            this.componentDidMount()
            alert("Delete successfully!");
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/researchpaperpayment/').then(response => {
            this.setState({paymentDetails: response.data.data});
            console.log(response.data);
        })
    }
    render() {
        return(
            <div className="container">
                <h3>Payment Details</h3>
                {this.state.paymentDetails.length > 0 && this.state.paymentDetails.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" >
                            <h5>Full Name: {item.name}</h5>
                            <h6>Contact No: {item.contactNo}</h6>
                            <h6>Email: {item.email}</h6>
                            <h6>Deposited Amount: {item.depositedAmount}</h6>
                            <h6>Deposited Date: {item.depositedDate}</h6>
                            <h6>Bank: {item.bank}</h6>
                            <h6>Branch: {item.branch}</h6>
                            <button style={{marginLeft: "20px"}} onClick = {e => this.deletePaymentDetails(e, item._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default ViewPaymentDetails;