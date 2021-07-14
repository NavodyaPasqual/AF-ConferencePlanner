import React, { useEffect, useState} from 'react';
import Layout from "./layout";
import { Redirect } from 'react-router-dom';

const UpdateSpeaker = ({match}) => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        status: '',
        photo: '',
        loading: false,
        error: '',
        createdSpeaker: '',
        redirectTo: false,
        formData: ''
    });

    const {
        name,
        description,
        status,
        photo,
        loading,
        error,
        createdSpeaker,
        redirectTo,
        formData
    } = values;

    useEffect(() => {
        init(match.params.speakerId);
    }, [])

    const updateConference = (speakerId,speaker) => {
        return fetch(`http://localhost:8080/speaker/update/${speakerId}`,{
            method: "PUT",
            headers: {
                Accept: "application/json"
            },
            body: speaker
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const getOneSpeaker = (speakerId) => {
        return fetch(`http://localhost:8080/speaker/${speakerId}`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const init = (speakerId) => {
        getOneSpeaker(speakerId)
            .then(data => {
                if(data.error) {
                    setValues({...values,error: data.error})
                } else {
                    //populate the state
                    setValues({...values,
                        name: data.name,
                        description: data.description,
                        status: data.status,
                        formData: new FormData()
                    })
                }
            });
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

        updateConference(match.params.speakerId, formData)
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        name: "",
                        description: "",
                        photo: "",
                        status: "",
                        loading: true,
                        error: false,
                        redirectTo: true,
                        createdSpeaker: data.name
                    });
                }
            });
    };

    const Update = () => (
        <form className="mb-3 mt-3" onSubmit={clickSubmit}>
            <h4> Speaker Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*"/>
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')}  className="form-control" value={description}/>
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
            <button className="btn btn-outline-primary">Update Speaker</button>
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
        <div className="alert alert-info" style={{display: createdSpeaker ? '':'none'}}>
            <h2>{`${createdSpeaker}`} is updated!</h2>
        </div>
    );

    // Show loading until process completes
    const showLoading = () =>
        loading && (<div className="alert alert-success">
            <h2>Updating...</h2>
        </div>);

    return (
        <Layout titleheader="Update Speaker" titleDescription="G'day , Update speaker here...">
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
export default UpdateSpeaker;
