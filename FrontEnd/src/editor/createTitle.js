import React,{ useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Layout from "./layout";

const CreateTopic = () => {

    // state
    const[state, setState] = useState({
        title: '',
        status: ''
    })

    const [content, setContent] = useState('')

    // rich text editor handle change
    const handleContent = (event) => {
        console.log(event);
        setContent(event);
    }

    // destructure values from state
    const {title, status } = state;

    // onChange event handler
    const handleChange = (name) => (event) => {
        setState({...state, [name]:event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:8080/topic/create`, {title, content, status}, {
                headers: {
                }
            })
            .then(response => {
                //empty the state
                setState({...state, title: '',status:''})
                setContent('');
                //show success
                alert(`Topic added  ${response.data.title}`)
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    return (
        <Layout titleheader="Add Topic" titleDescription="G'day Jay, add new topics here...">
            <div className="border border-info">
                <div className="col-md-8 offset-md-2">
                    <form className="mb-3 mt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input onChange={handleChange('title')} value={title} type="text" className="form-control" placeholder="Topic" required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Content</label>
                    <ReactQuill onChange={handleContent} theme="snow" value={content} className="pb-5 mb-3" placeholder="Write something..." style={{border:'1px solid #666'}}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Status</label>
                    <select onChange={handleChange('status')} className="form-control">
                        <option> Please Select </option>
                        <option value="NotApproved"> Not Approved </option>
                    </select>
                </div>
                <br/>
                <div>
                    <button className="btn btn-outline-primary">Create Topic</button>
                </div>
            </form>
                </div>
            </div>
        </Layout>
    );



}
export default CreateTopic;
