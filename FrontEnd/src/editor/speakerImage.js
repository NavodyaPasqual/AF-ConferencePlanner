import React from "react";
import './view.css'


// Get images of speakers
const ShowImage = ({item}) => (
    <div className="image">
        <img src={`http://localhost:8080/speaker/photo/${item._id}`}
             alt={item.name} className="mb-3" style={{ maxHeight: '100%', maxWidth: '100%'}}
        />
    </div>
);

export default ShowImage;
