import React, {Component} from 'react';
import axios from "axios";
import moment from "moment";

class ViewAttendeeWorkShopPayments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshoppayments: []
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8080/workshoppayment/')
            .then(response => {
                this.setState({workshoppayments: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deletePayment(e, id){
        const r = window.confirm("Do you really want to delete payment submission");
        if(r == true) {
            axios.delete(`http://localhost:8080/workshoppayment/delete/${id}`)
                .then(response => {
                    alert('Data successfully deleted')
                    this.componentDidMount()
                })
        }
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8080/workshoppayment/update/${id}`, {status: status, id:id})
            .then(response => {
                alert('status successfully updated')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="p-3">
                <h1>Attendee Payments for WorkShop List</h1>
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Attendee name</th>
                                <th>ContactNo</th>
                                <th>Email</th>
                                <th>Deposited Amount</th>
                                <th>Deposited Date</th>
                                <th>Bank</th>
                                <th>Branch</th>
                                <th>WorkShop Title</th>
                                <th>WorkShop Description</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.workshoppayments.length > 0 && this.state.workshoppayments.map((item,index) => (
                                <tr key={index} className="align-top">
                                    <td>{item.name}</td>
                                    <td>{item.contactNo}</td>
                                    <td>{item.email}</td>
                                    <td>{item.depositedAmount}</td>
                                    <td>{moment(item.depositedDate).format('YYYY-MM-DD')}</td>
                                    <td>{item.bank}</td>
                                    <td>{item.branch}</td>
                                    <td>{item.workshops && item.workshops.length > 0 ?
                                        <div>
                                            {item.workshops.map((workshops, index) => (
                                                <tr key={index}>
                                                    <td>{workshops.workShopTitle}</td>
                                                </tr>
                                            ))}
                                        </div>
                                        : null}</td>
                                    <td>{item.workshops && item.workshops.length > 0 ?
                                        <div>
                                            {item.workshops.map((workshops, index) => (
                                                <tr key={index}>
                                                    <td>{workshops.description}</td>
                                                </tr>
                                            ))}
                                        </div>
                                        : null}</td>
                                    {item.status == "not validated" &&
                                    <td><h6><span className="badge bg-danger">{item.status}</span></h6></td>
                                    }
                                    {item.status == "validated" &&
                                    <td><h6><span className="badge bg-success">{item.status}</span></h6></td>
                                    }
                                    <td><button className="btn btn-outline-warning" onClick={e => this.updateStatus(e,item._id)}>
                                        <i className="far fa-edit"></i>
                                    </button></td>
                                    <td><button className="btn btn-outline-danger" onClick={e => this.deletePayment(e,item._id)}>
                                        <i className="fas fa-trash"></i>
                                    </button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewAttendeeWorkShopPayments;


