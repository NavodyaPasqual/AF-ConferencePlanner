import React, {Component} from 'react';
import axios from "axios";

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
        axios.delete(`http://localhost:8080/workshop/delete/${id}`)
            .then(response => {
                alert('Data successfully deleted')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Submitted WorkShops</h1>
                {/* Check whether array have any value */}
                {this.state.workshops.length > 0 && this.state.workshops.map((item,index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h6>Organizer Name: {item.organizerName}</h6>
                            <h6>Organizer ContactNo: {item.organizerContactNo}</h6>
                            <h6>Organizer Email: {item.organizerEmail}</h6>
                            <h6>WorkShop Title: {item.workShopTitle}</h6>
                            <h6>description: {item.description}</h6>
                            <h6>proposalURL: {item.proposalURL}</h6>
                            <h6>Estimated Duration(in days): {item.estimatedDuration}</h6>
                            <h6>Payment Amount($): {item.paymentAmount}</h6>
                            {item.status == "not approved" &&
                                <h6>Status: <span className="badge bg-danger">{item.status}</span></h6>
                            }
                            {item.status == "not approved" &&
                                <button onClick={e => this.deleteWorkShop(e,item._id)}>DELETE</button>
                            }
                            {item.status == "approved" &&
                                <h6>Status: <span className="badge bg-success">{item.status}</span></h6>
                            }
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ViewWorkShop;