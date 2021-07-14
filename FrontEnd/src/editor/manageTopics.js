import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html';
import Layout from "./layout";

const GetAllTopics = () => {
    const [posts, setPosts] = useState([])

    const fetchTopics = () => {
        axios.get(`http://localhost:8080/topic/topics`)
            .then(response => {
                console.log(response.data);
                setPosts(response.data)
            })
            .catch(error => alert('Error fetching topics'));
    }

    useEffect(() => {
        fetchTopics()
    }, []);

    const deleteConfirm = (slug) => {
        let answer = window.confirm('Are you sure you want to delete this topic?')
        if(answer) {
            deletePost(slug);
        }
    }

    const deletePost = (slug) => {
        console.log('delete', slug, 'topic');
        axios.delete(`http://localhost:8080/topic/post/${slug}`, {
            headers: {
            }
        })
            .then(response => {
                alert(response.data.message);
                fetchTopics()

            })
            .catch(error => alert('error deleting topic'));
    }

    return (
        <div className="border border-info" style={{margin: 40}}>
            <Layout titleheader="Manage Topics " titleDescription="manage topics here..." className="container-fluid">
                <div className="container pt-3" >
                    <div className="row">
                        {posts.map((post, i) => (
                            <div key={post._id} style={{borderBottom: '6px solid silver'}}>
                                <div className="col-12 mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to={`/post/${post.slug}`}>
                                                <h2>{post.title}</h2></Link>
                                            <div className="lead pt-3">{renderHTML(post.content.substring(0, 100))}</div>
                                        </div>
                                        <div className="col-md-6" style={{marginTop:40}}>
                                            <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-warning ml-1">
                                                Update
                                            </Link>
                                            <button style={{marginLeft: 8}} onClick={() => deleteConfirm(post.slug)} className="btn btn-sm btn-danger ml-1">Delete</button>
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

export default GetAllTopics;
