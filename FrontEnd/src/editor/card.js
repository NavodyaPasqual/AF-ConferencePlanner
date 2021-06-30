import React from "react";
import ShowImage from "./image";
import {Link} from "react-router-dom";


const Card = ({speaker}) => {

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

    return (
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
    )
};

export default Card;
