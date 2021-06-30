import React from "react";
import './view.css'


// Get images to conference
const ShowImage = ({item}) => (
    <div className="image">
        <img src={`http://localhost:8080/conference/photo/${item._id}`}
             alt={item.title} className="mb-3" style={{ maxHeight: '100%', maxWidth: '100%'}}
             />
    </div>
);

export default ShowImage;
