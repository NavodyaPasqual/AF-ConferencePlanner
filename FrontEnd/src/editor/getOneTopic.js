import React, {useEffect, useState} from "react";
import axios from "axios";
import renderHTML from 'react-render-html';
import './view.css';

const SingleTopic = (props) => {
    const [post, setPost] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8080/topic/post/${props.match.params.slug}`)
            .then(response => setPost(response.data))
            .catch(error => alert('Error loading on topic'));

    }, []);

    const showSinglePost = () => (
        <div className="row">
            <div className="col-md-8 offset-md-2 pt-3 pb-2">
                <h1 style={{color: "darkcyan"}}>{post.title}</h1>
                <div className="lead pt-3">{renderHTML((post.content))}</div>
            </div>
        </div>
    )

    return (
        <main>
            <div className="singletopic">
                <br/>
                {post && showSinglePost()}
            </div>
        </main>
    );

};

export default SingleTopic;
