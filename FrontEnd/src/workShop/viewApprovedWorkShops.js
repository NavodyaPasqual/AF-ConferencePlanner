import React, {Component} from 'react';
import axios from "axios";
import moment from "moment";
import "./style/viewApprovedWorkShop.css"
import upcoming from './images/upcomming.png';

class ViewApprovedWorkShops extends Component {
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

    render() {
        return (
            <div className="background-workshop">
                <img src={upcoming}/>
                <div className="container p-3">
                    <h1>UPCOMING WORKSHOPS</h1><br/>
                    {/* Check whether array have any value */}
                    <div className="p-3">
                        {this.state.workshops.length > 0 && this.state.workshops.map((item,index) => (
                            <div key={index} >
                                {item.status == "approved" &&
                                    <div className="card border-warning shadow mb-5 bg-body rounded">
                                        <div className="card-header">
                                            <h5>WorkShop Title: {item.workShopTitle}</h5>
                                        </div>
                                        <div className="card-body">
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
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewApprovedWorkShops;