import React, {Component} from 'react';
import axios from "axios";
import jsPDF from 'jspdf';

class ViewResearchPaper extends Component {
    constructor(props) {
        super(props);
        this.deleteResearchPaper = this.deleteResearchPaper.bind(this);
        this.state = {
            researchPapers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/research/').then(response => {
            this.setState({researchPapers: response.data.data});
            console.log(response.data);
        })
    }

    deleteResearchPaper(e, id){
        axios.delete('http://localhost:8080/research/delete/:id').then(response => {
            this.componentDidMount()
            alert("Delete successfully!");
        })
    }
    download = () => {
        let doc = new jsPDF();
        doc.text("paper", 20, 20);
        doc.save("Paper.pdf");
    }

    navigatePaymentPage(e) {
        window.location = `/research-paper-payment`
    }
    render() {
        return(
            <div className="container">
                <h3>Research Papers</h3>
                {this.state.researchPapers.length > 0 && this.state.researchPapers.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" >
                            <h4>Title: {item.title}</h4>
                            <h5>Description: {item.description}</h5>
                            <h5>Author: {item.author}</h5>
                            <h5>Paper: {item.paper}</h5>
                            <button type="submit" className="btn btn-primary" onClick = {this.download}>Download</button>
                            <button style={{marginLeft: "20px"}} type="submit" className="btn btn-primary" onClick={e => this.navigatePaymentPage(e)}>Approve</button>
                            <button style={{marginLeft: "20px"}} onClick = {e => this.deleteResearchPaper(e, item._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default ViewResearchPaper;