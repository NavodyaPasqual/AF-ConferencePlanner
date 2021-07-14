import React, {useEffect, useState} from "react";
import Layout from "./layout";
import {Link} from "react-router-dom";

const ManageConference = () => {

    const [conferences, setConferences] = useState([])

    // get the conferences from backend
    const getConferences = () => {
        return fetch(`http://localhost:8080/conference/conferences`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const deleteConference = (conferenceId) => {
        return fetch(`http://localhost:8080/conference/delete/${conferenceId}`,{
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const loadConferences = () => {
        getConferences().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                setConferences(data)
            }
        })
    };

    const deleteConfirm = (conferenceId) => {
        let answer = window.confirm('Are you sure you want to delete this conference?')
        if(answer) {
            destroyConference(conferenceId);
        }
    };

    const destroyConference = (conferenceId) => {
        deleteConference(conferenceId)
            .then(data => {
                if(data.error){
                    console.log(data.error)
                } else {
                    loadConferences()
                }
            })
    };

    useEffect(() => {
        loadConferences()
    }, [])

    return (
        <div className="border border-info" style={{margin: 40}}>
        <Layout titleheader="Manage Conference Details" titleDescription="manage conference details here..." className="container-fluid">
            <div className="container-fluid ml-4 mt-5">
                <div className="col-12">
                    {conferences.map((c,i)=> (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card mb-5" key={i} style={{border: '2px solid #666'}}>
                                        <div className="card-header p-8" style={{background: "#B0DFE5"}}>
                                            <div className="p-8">
                                                <strong className="m-2">Title : {c.title}</strong>
                                            </div>
                                            <div className="p-8">
                                                <strong className="m-2"> Status : {c.status}</strong>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <Link to={`/conference/update/${c._id}`}>
                                                <button className="btn btn-warning m-2">
                                                    Update
                                                </button>
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => deleteConfirm(c._id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
        </div>
    );
};

export default ManageConference;
