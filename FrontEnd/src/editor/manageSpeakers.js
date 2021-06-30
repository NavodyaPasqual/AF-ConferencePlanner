import React, {useEffect, useState} from "react";
import Layout from "./layout";
import {Link} from "react-router-dom";
import Card from "./card";
import ShowImage from "./speakerImage";


const ManageSpeakers = () => {

    const [speaker, setSpeaker] = useState([])

    // get the speakers from backend
    const getSpeakers = () => {
        return fetch(`http://localhost:8080/speaker/speakers`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    // remove speakers
    const deleteSpeaker = (speakerId) => {
        return fetch(`http://localhost:8080/speaker/delete/${speakerId}`,{
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

    const loadSpeakers = () => {
        getSpeakers().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                setSpeaker(data)
            }
        })
    };

    const destroySpeaker = (speakerId) => {
        deleteSpeaker(speakerId)
            .then(data => {
                if(data.error){
                    console.log(data.error)
                } else {
                    loadSpeakers();
                }
            })
    };

    useEffect(() => {
        loadSpeakers();
    }, [])

    return (
        <Layout titleheader="Manage Speaker Details" titleDescription="Update and Delete" className="container-fluid">

            <div className="container" >
                <h2 className="mb-4"> Speakers </h2>
                <div className="row">
                    {speaker.map((speaker, s) => (
                        <div>
                            <div className="col-4 mb-3">
                                <div className="card-header">{speaker.name}</div>
                                <div className="card-body">
                                    <ShowImage item={speaker}/>
                                    <p>{speaker.description}</p>
                                    <Link to={`/speaker/update/${speaker._id}`}>
                                        <button className="btn btn-warning m-2">
                                            Update
                                        </button>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => destroySpeaker(speaker._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
};

export default ManageSpeakers;
