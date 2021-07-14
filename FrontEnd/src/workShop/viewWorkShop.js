import React, {Component} from 'react';
import axios from "axios";
import moment from "moment";
import my from "./images/myworkshop.png";

class ViewWorkShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshops: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8080/workshop/')
            .then(response => {
                this.setState({workshops: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deletePayment(e, id){
        axios.delete(`http://localhost:8080/workshop/delete/${id}`)
            .then(response => {
                alert('Data successfully deleted')
                this.componentDidMount()
            })
    }

    deleteWorkShop(e, id){
        const r = window.confirm("Do you really want delete workShop submission");
        if(r == true) {
            axios.delete(`http://localhost:8080/workshop/delete/${id}`)
                .then(response => {
                    alert('Data successfully deleted')
                    this.componentDidMount()
                })
        }
    }

    render() {
        return (
            <div className="background-workshop">
                <img src={my}/>
                <div className="container p-3">
                    <h1>My Registered WorkShops</h1><br/>
                    {/* Check whether array have any value */}
                    <div className="p-3">
                        {this.state.workshops.length > 0 && this.state.workshops.map((item,index) => (
                            <div key={index}>
                                <div className="card shadow p-3 mb-5 bg-body rounded">

                                    {item.status == "not approved" &&
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-outline-danger" onClick={e => this.deleteWorkShop(e,item._id)}><i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                        </div>
                                    }
                                    <div className="row">
                                        <dt className="col-sm-2">Organizer Name</dt>
                                        <dd className="col-sm-10">{item.organizerName}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Organizer ContactNo </dt>
                                        <dd className="col-sm-10">{item.organizerContactNo}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Organizer Email </dt>
                                        <dd className="col-sm-10">{item.organizerEmail}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Title </dt>
                                        <dd className="col-sm-10">{item.workShopTitle}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Description </dt>
                                        <dd className="col-sm-10">{item.description}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Presenters </dt>
                                        <dd className="col-sm-10">{item.presenters}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Proposal </dt>
                                        <dd className="col-sm-10"><a href="/workshop-template">show</a></dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Estimated Duration </dt>
                                        <dd className="col-sm-10">{item.estimatedDuration}days</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-2">Payment Amount </dt>
                                        <dd className="col-sm-10">{item.paymentAmount}$</dd>
                                    </div>

                                    {item.status == "not approved" &&
                                        <div className="row">
                                            <dt className="col-sm-2">Status </dt>
                                            <dd className="col-sm-10"><h6><span className="badge bg-danger">{item.status}</span></h6></dd>
                                        </div>

                                    }

                                    {item.status == "approved" &&
                                    <div>
                                        <div className="row">
                                            <dt className="col-sm-2">Date </dt>
                                            <dd className="col-sm-10">{moment(item.date).format('YYYY-MM-DD')}</dd>
                                        </div>
                                        <div className="row">
                                            <dt className="col-sm-2">Status </dt>
                                            <dd className="col-sm-10"><h6><span className="badge bg-success">{item.status}</span></h6></dd>
                                        </div>
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

export default ViewWorkShop;