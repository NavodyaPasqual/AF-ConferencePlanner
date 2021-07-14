import React, {Component} from 'react';
import axios from "axios";
import * as jsPDF from "jspdf";
import moment from "moment";

class ViewWorkShops extends Component {
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

    approve(e, id){
        
        axios.put(`http://localhost:8080/workshop/update/${id}`, {status: "approved", id:id})
        .then(response => { 
            this.componentDidMount()
        })
    }
    decline(e, id){ 
        axios.put(`http://localhost:8080/workshop/update/${id}`, {status: "not approved", id:id})
        .then(response => { 
            this.componentDidMount()
        })
    }

    render() {
        return (
            <div className="background-workshop"> 
            <div className="container p-3">
                <h1>Review workshops</h1><br/> 

                <div className="p-3">
                    {this.state.workshops.length > 0 && this.state.workshops.map((item,index) => (
                        <div key={index} >
                            
                                <div className="card shadow mb-5 bg-body rounded">
                                    <div className="card-header">
                                        <h5>WorkShop Title: {item.workShopTitle}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                            <div className="row">
                                            <dt className="col-sm-2">Description</dt>
                                            <dd className="col-sm-10">{item.description}</dd>
                                        </div>
                                        <div className="row">
                                            <dt className="col-sm-2">Presenters </dt>
                                            <dd className="col-sm-10">{item.presenters}</dd>
                                        </div>
                                        <div className="row">
                                            <dt className="col-sm-2">Date</dt>
                                            <dd className="col-sm-10">{moment(item.date).format('YYYY-MM-DD')}</dd>
                                        </div>
                                        <div className="row">
                                            <dt className="col-sm-2">Estimated Duration</dt>
                                            <dd className="col-sm-10">{item.estimatedDuration} days</dd>
                                        </div>
                                        <div className="row">
                                            <dt className="col-sm-2">Payment Amount</dt>
                                            <dd className="col-sm-10">{item.paymentAmount} $</dd>
                                        </div>
                                        <div className="row">
                                            <dt className="col-sm-2">Status</dt>
                                            <dd className="col-sm-10">
                                            {item.status == "not approved" &&
                                                <span className="badge bg-danger">{item.status}</span>
                                            }
                                            {item.status == "approved" &&
                                                <span className="badge bg-success">{item.status}</span>
                                            } 
                                            {item.status == null &&
                                                <span className="badge bg-secondary">Not decide</span>
                                            }   
                                            </dd>
                                        </div>
                                            </div>
                                            <div className="col-md-4">
                                            <a href="/workshop-template"><button className="btn btn-outline-primary mr-5">
                                            <i className="far fa-eye"></i> &nbsp; view Proposal
                                            </button>&nbsp; </a>
                                            <button className="btn btn-outline-success mr-5" onClick={e => this.approve(e,item._id)}>
                                            <i className="fa fa-check"></i> &nbsp; Approve 
                                            </button>&nbsp; 
                                            <button className="btn btn-outline-danger ml-4" onClick={e => this.decline(e,item._id)}>
                                                <i className="fas fa-times"></i> &nbsp; Decline
                                            </button>
                                            </div>
                                        </div>
                                       
                                       
                                    </div>
                                </div>

                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
            
        )
    }
}

export default ViewWorkShops;


