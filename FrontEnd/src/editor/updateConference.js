import React, {Component, useEffect, useState} from 'react';
import Layout from "./layout";
import { Redirect } from 'react-router-dom';

const UpdateConference = ({match}) => {

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
        redirectTo: false,
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
        redirectTo,
        formData
    } = values;

    useEffect(() => {
       init(match.params.conferenceId);
        //setValues({...values, formData: new FormData()})
    }, [])

    const updateConference = (conferenceId,conference) => {
        return fetch(`http://localhost:8080/conference/update/${conferenceId}`,{
            method: "PUT",
            headers: {
                Accept: "application/json"
            },
            body: conference
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const getOneConference = (conferenceId) => {
        return fetch(`http://localhost:8080/conference/${conferenceId}`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const init = (conferenceId) => {
        getOneConference(conferenceId)
            .then(data => {
                if(data.error) {
                    setValues({...values,error: data.error})
                } else {
                    //populate the state
                    setValues({...values,
                        title: data.title,
                        description: data.description,
                        data: data.date,
                        venue: data.venue,
                        about: data.about,
                        status: data.status,
                        formData: new FormData()
                    })
                }
            })
    };

    const handleChange = (name) => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values, [name]: value})
    }

    // After finishing update redirect to dashboard
    const redirectEditor = () => {
        if(redirectTo){
            if(!error){
                return <Redirect to="/editor"/>
            }
        }
    };

    // update the details
    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true})

        updateConference(match.params.conferenceId, formData)
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
                        loading: true,
                        error: false,
                        redirectTo: true,
                        createdConference: data.title
                    });
                }
            });
    };

    const Update = () => (
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
                <textarea onChange={handleChange('description')}  className="form-control" value={description}/>
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
                    <option value="Approved"> Approved </option>
                </select>
            </div>
            <br/>
            <button className="btn btn-outline-primary">Update Conference</button>
        </form>
    );

    // Show errors when error occured
    const ShowError = () => (
        <div className="alert alert-danger" style={{display: error ? '':'none'}}>
            {error}
        </div>
    );

    // Show Success when no errors
    const ShowSuccess = () => (
        <div className="alert alert-info" style={{display: createdConference ? '':'none'}}>
            <h2>{`${createdConference}`} is updated!</h2>
        </div>
    );

    // Show loading until process completes
    const showLoading = () =>
        loading && (<div className="alert alert-success">
            <h2>Updating...</h2>
        </div>);

    return (
        <Layout titleheader="Update Conference" titleDescription="G'day , Update conference here...">
            <div className="border border-info">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {ShowSuccess()}
                    {ShowError()}
                    {Update()}
                    {redirectEditor()}
                </div>
            </div>
        </Layout>
    );
};
export default UpdateConference;
