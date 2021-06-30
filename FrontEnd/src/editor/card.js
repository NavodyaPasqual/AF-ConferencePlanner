import React from "react";
import ShowImage from "./image";


const Card = ({conference}) => {
    return (
        <div className="col-4 mb-3">
            <div className="row">
                <div className="card-header">{conference.title}</div>
                <div className="card-body">
                    <ShowImage item={conference} />
                    <p>{conference.description}</p>
                    <p>{conference.venue}</p>
                    <p>{conference.date}</p>
                    <p>{conference.about}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;
