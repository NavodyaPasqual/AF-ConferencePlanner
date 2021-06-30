import React, {Component} from 'react';
import axios from 'axios';

class ViewPayment extends Component {
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
        axios.delete(`http://localhost:8080/workshoppayment/delete/${id}`)
            .then(response => {
                alert('Data successfully deleted')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Own Payments For WorkShops</h1>
                {/* Check whether array have any value */}
                {this.state.workshoppayments.length > 0 && this.state.workshoppayments.map((item,index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h6>Name: {item.name}</h6>
                            <h6>ContactNo: {item.contactNo}</h6>
                            <h6>Email: {item.email}</h6>
                            <h6>Deposited Amount: {item.depositedAmount}</h6>
                            <h6>Deposited Date: {item.depositedDate}</h6>
                            <h6>bank: {item.bank}</h6>
                            <h6>branch: {item.branch}</h6>
                            <div>
                                {item.workshops && item.workshops.length > 0 ?
                                    <div>
                                        <b>Workshop Detail</b>
                                        {item.workshops.map((workshops, index) => (
                                            <div key={index} className="card p-2 mb-2">
                                                <h6>WorkShop Title: {workshops.workShopTitle}</h6>
                                                <h6>Description: {workshops.description}</h6>
                                            </div>
                                        ))}
                                    </div>
                                    : null}
                                <button onClick={e => this.deletePayment(e,item._id)}>DELETE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}

export default ViewPayment;