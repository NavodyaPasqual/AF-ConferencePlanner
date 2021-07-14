import React from "react";
import './view.css'


// Get images of speakers
const ShowImage = ({item}) => (
    <div className="speaker-image">
        <img src={`http://localhost:8080/speaker/photo/${item._id}`}
             alt={item.name} className="mb-3" style={{ height: 320, width: 380}}
        />
    </div>
);

export default ShowImage;
