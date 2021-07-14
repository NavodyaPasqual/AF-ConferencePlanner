import React, {Component, useEffect, useState} from 'react';
import Layout from "./layout";

const CreateConference = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        date: '',
        venue: '',
        about: '',
        status: '',
        photo: '',
        loading: false,
        error: '',
        createdConference: '',
        formData: ''
    });

    const {
        title,
        description,
        date,
        venue,
        about,
        status,
        photo,
        loading,
        error,
        createdConference,
        formData
    } = values;

    useEffect(() => {
        setValues({...values, formData: new FormData()})
    }, [])


    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values, [name]: value})
    }

    const createConference = (conference) => {
        return fetch(`http://localhost:8080/conference/create`, {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: conference
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true})

        createConference(formData)
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        title: "",
                        description: "",
                        photo: "",
                        venue: "",
                        about: "",
                        status: "",
                        date: "",
                        error: false,
                        loading: false,
                        createdConference: data.title
                    });
                }
            });
    };

    const PostNewConference = () => (
        <form className="mb-3 mt-3" onSubmit={clickSubmit}>
            <h4> Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*"/>
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input onChange={handleChange('title')} type="text" className="form-control" value={title}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description}/>
            </div>
            <div className="form-group">
                <label className="text-muted">About</label>
                <textarea onChange={handleChange('about')}  className="form-control" value={about}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Venue</label>
                <input onChange={handleChange('venue')} type="text" className="form-control" value={venue}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Date</label>
                <input onChange={handleChange('date')} type="date" className="form-control" value={date}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Status</label>
                <select onChange={handleChange('status')} className="form-control">
                    <option> Please Select </option>
                    <option value="NotApproved"> Not Approved </option>
                </select>
            </div>
            <br/>
            <button className="btn btn-outline-primary">Create Conference</button>
        </form>
    );

    const ShowError = () => (
        <div className="alert alert-danger" style={{display: error ? '':'none'}}>
            {error}
        </div>
    );

    const ShowSuccess = () => (
        <div className="alert alert-info" style={{display: createdConference ? '':'none'}}>
            <h2>{`${createdConference}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (<div className="alert alert-success">
            <h2>Loading...</h2>
        </div>);

    return (
        <Layout titleheader="Add Conference" titleDescription="G'day Jay, add new conference here...">

            <div className="border border-info">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {ShowSuccess()}
                    {ShowError()}
                    {PostNewConference()}
                </div>
            </div>
        </Layout>
    );

};


export default CreateConference;
