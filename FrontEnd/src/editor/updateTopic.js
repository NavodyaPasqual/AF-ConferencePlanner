import React, {useEffect, useState} from "react";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Layout from "./layout";

const UpdateTopic = (props) => {
    const [state, setState] = useState({
        title: '',
        slug: '',
        status: ''
    })

    const { title, slug, status} = state

    const [content, setContent] = useState('')

    // rich text editor handle change
    const handleContent = (event) => {
        console.log(event);
        setContent(event);
    }


    useEffect(() => {
        axios.get(`http://localhost:8080/topic/post/${props.match.params.slug}`)
            .then(response => {
                const {title, content, slug, status} = response.data
                setState({...state, title, slug, status})
                setContent(content);
            })
            .catch(error => alert('Error loading topic'));

    }, []);

    // onChange event handler
    const handleChange = name => (event) => {
        setState({...state, [name]:event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .put(`http://localhost:8080/topic/post/${slug}`, {title, content, status}, {
                headers: {
                }
            })
            .then(response => {
                console.log(response);
                const {title, content, slug, status} = response.data
                //empty the state
                setState({...state, title, content, slug, status})
                //show success
                alert(`Topic titled ${title} is updated.`)
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };


    const showUpdateForm = () => (
        <form className="mb-3 mt-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input onChange={handleChange('title')} value={title} type="text" className="form-control" placeholder="Post title" required/>
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                <ReactQuill onChange={handleContent} theme="snow" value={content} className="pb-5 mb-3" placeholder="Write something..." style={{border:'1px solid #666'}}/>    </div>
            <div className="form-group">
                <label className="text-muted">Status</label>
                <select onChange={handleChange('status')} className="form-control">
                    <option> Please Select </option>
                    <option value="NotApproved"> Not Approved </option>
                    <option value="Approved"> Approved </option>
                </select>
            </div>
            <br/>
            <div>
                <button className="btn btn-outline-primary">Update</button>
            </div>
        </form>
    );

    return (
        <Layout titleheader="Update Topic" titleDescription="G'day , update topics here...">
            <div className="border border-info">
                <div className="col-md-8 offset-md-2">
                    {showUpdateForm()}
                </div>
            </div>
        </Layout>
    )

};

export default UpdateTopic;
