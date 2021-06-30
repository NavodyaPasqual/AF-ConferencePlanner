import React, {Component} from 'react';
import axios from "axios";

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
            <div className="container">
                <h1>WorkShops</h1>
                {/* Check whether array have any value */}
                {this.state.workshops.length > 0 && this.state.workshops.map((item,index) => (
                    <div key={index} className="card mb-3">
                        {item.status == "approved" &&
                            <div className="p-3">
                                <h6>Organizer Name: {item.organizerName}</h6>
                                <h6>Organizer ContactNo: {item.organizerContactNo}</h6>
                                <h6>Organizer Email: {item.organizerEmail}</h6>
                                <h6>WorkShop Title: {item.workShopTitle}</h6>
                                <h6>Description: {item.description}</h6>
                                <h6>Proposal URL: {item.proposalURL}</h6>
                                <h6>Estimated Duration(in days): {item.estimatedDuration}</h6>
                                <h6>Payment Amount($): {item.paymentAmount}</h6>
                            </div>
                        }
                    </div>
                ))}
            </div>
        )
    }
}

export default ViewApprovedWorkShops;