import React, {Component} from 'react';
import axios from "axios";

class ViewAttendee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attendees: []
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8080/attendee')
            .then(response => {
                this.setState({attendees: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deletePayment(e, id){
        const r = window.confirm("Do you really want to delete workshop registration");
        if(r == true) {
            axios.delete(`http://localhost:8080/attendee/delete/${id}`)
                .then(response => {
                    alert('Data successfully deleted')
                    this.componentDidMount()
                })
        }
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8080/attendee/update/${id}`, {status: status, id:id})
            .then(response => {
                alert('status successfully updated')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="p-3">
                <h1>Attendee WorkShop Registration List</h1>
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Attendee name</th>
                                <th>ContactNo</th>
                                <th>Email</th>
                                <th>Affiliation</th>
                                <th>Interest</th>
                                <th>WorkShop Title</th>
                                <th>WorkShop Description</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.attendees.length > 0 && this.state.attendees.map((item,index) => (
                                <tr key={index} className="align-top">
                                    <td>{item.name}</td>
                                    <td>{item.contactNo}</td>
                                    <td>{item.email}</td>
                                    <td>{item.affiliation}</td>
                                    <td>{item.interest}</td>
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
                                    {item.status == "not approved" &&
                                    <td><h6><span className="badge bg-danger">{item.status}</span></h6></td>
                                    }
                                    {item.status == "approved" &&
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

export default ViewAttendee;


