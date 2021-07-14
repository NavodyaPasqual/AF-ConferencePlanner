import React, {Component} from 'react';
import axios from 'axios';
import image from './image/myregattwork.png';

class ViewAttendeeRegistration extends Component {
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

    render() {
        return (
            <div className="background-workshop">
                <img src={image}/>
                <div className="container p-3">
                    <h1>My WorkShops</h1><br/>
                    <div className="p-3">
                        {/* Check whether array have any value */}
                        {this.state.attendees.length > 0 && this.state.attendees.map((item,index) => (
                            <div key={index}>
                                <div className="card shadow p-3 mb-5 bg-body rounded">

                            {item.status == "not approved" &&
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-outline-danger" onClick={e => this.deletePayment(e,item._id)}>
                                <i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                </div>
                                }
                                    {item.status == "approved" &&
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button className="btn btn-outline-success" onClick={()=>{
                                        window.location.replace('/workshop-payment/create')
                                    }}>
                                    <i className="fas fa-dollar-sign">&nbsp;&nbsp;PAY</i></button>
                                    </div>
                                    }
                                    <div className="row">
                                        <dt className="col-sm-2">Name</dt>
                                        <dd className="col-sm-10">{item.name}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Contact Number</dt>
                                        <dd className="col-sm-10">{item.contactNo}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Email</dt>
                                        <dd className="col-sm-10">{item.email}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Affiliation</dt>
                                        <dd className="col-sm-10">{item.affiliation}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Interest</dt>
                                        <dd className="col-sm-10">{item.interest}</dd>
                                    </div>
                                    <div>
                                        {item.workshops && item.workshops.length > 0 ?
                                            <div className="row">
                                                <dt className="col-sm-2">Workshop Detail</dt>
                                                <dd className="col-sm-10">
                                                    {item.workshops.map((workshops, index) => (
                                                        <div key={index} className="card p-2 mb-2">
                                                            <div className="row">
                                                                <dt className="col-sm-2">WorkShop Title</dt>
                                                                <dd className="col-sm-10">{workshops.workShopTitle}</dd>
                                                            </div>
                                                            <div className="row">
                                                                <dt className="col-sm-2">Description</dt>
                                                                <dd className="col-sm-10">{workshops.description}</dd>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </dd>
                                            </div>
                                            : null}
                                    </div>
                                    {item.status == "not approved" &&
                                        <div className="row">
                                            <dt className="col-sm-2">Status </dt>
                                            <dd className="col-sm-10"><h6><span className="badge bg-danger">{item.status}</span></h6></dd>
                                        </div>
                                    }
                                    {item.status == "approved" &&
                                        <div className="row">
                                            <dt className="col-sm-2">Status </dt>
                                            <dd className="col-sm-10"><h6><span className="badge bg-success">{item.status}</span></h6></dd>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewAttendeeRegistration;