import React, {Component} from 'react';
import axios from "axios";

class ViewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8080/user/users')
            .then(response => {
                this.setState({users: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deleteUser(e, id){
        const r = window.confirm("Do you really want to delete user details");
        if(r == true) {
            axios.delete(`http://localhost:8080/user/delete/${id}`)
                .then(response => {
                    alert('Data successfully deleted')
                    this.componentDidMount()
                })
        }
    }
 

    render() {
        return (
            <div className="p-3">
                <h1>Users List</h1>
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>name</th>
                                <th>ContactNo</th>
                                <th>Email</th>
                                <th>User type</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.length > 0 && this.state.users.map((item,index) => (
                                <tr key={index} className="align-top">
                                    <td>{item.name}</td>
                                    <td>{item.contactNo}</td>
                                    <td>{item.email}</td> 
                                    {item.type == "Admin" &&
                                    <td><h6><span className="text-danger">{item.type}</span></h6></td>
                                    }
                                    {item.type == "Attendee" &&
                                    <td><h6><span className="text-secondary">{item.type}</span></h6></td>
                                    }
                                    {item.type == "Presenter" &&
                                    <td><h6><span className="text-primary">{item.type}</span></h6></td>
                                    }
                                    {item.type == "Reviewer" &&
                                    <td><h6><span className="text-warning">{item.type}</span></h6></td>
                                    }
                                    {item.type == "Researcher" &&
                                    <td><h6><span className="text-info">{item.type}</span></h6></td>
                                    }
                                    {item.type == "Editor" &&
                                    <td><h6><span className="text-success">{item.type}</span></h6></td>
                                    }
                                    <td><button className="btn btn-outline-danger" onClick={e => this.deleteUser(e,item._id)}>
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

export default ViewUsers;


