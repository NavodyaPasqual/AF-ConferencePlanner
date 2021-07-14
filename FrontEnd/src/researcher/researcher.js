import React, {Component} from 'react';
import axios from "axios";

class Researcher extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            description: '',
            author: '',
            email: '',
            number: '',
            paper: ''
        }

    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        let researchppr = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            email: this.state.email,
            number: this.state.number,
            paper: this.state.paper,
        }
        console.log(researchppr);
        axios.post('http://localhost:8080/research/create', researchppr).then(response => {
            alert('data successfully insert');
            console.log(researchppr);
        }).catch(error => {
            console.log(error.message);
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Add Research Paper</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"/>
                    </div>
                    <br/>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            placeholder="Enter Description">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            className="form-control"
                            id="author"
                            name="author"
                            value={this.state.author}
                            onChange={this.onChange}
                            aria-describedby="emailHelp"
                            placeholder="Enter Author"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="email">Author Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder="Enter Email"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="number">Contact Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="number"
                            name="number"
                            value={this.state.number}
                            onChange={this.onChange}
                            aria-describedby="emailHelp"
                            placeholder="Enter Number"/>
                    </div>
                    <br/>
                    <div className="mb-3">
                        <label htmlFor="paper" className="form-label">Paper</label>
                        <input
                            type="file"
                            className="form-control"
                            id="paper"
                            name="paper"
                            value={this.state.paper}
                            onChange={this.onChange}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Researcher;