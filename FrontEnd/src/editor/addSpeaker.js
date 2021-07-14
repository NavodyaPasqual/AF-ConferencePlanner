import React, {useEffect, useState} from 'react';
import Layout from "./layout";

const CreateSpeaker = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        status: '',
        photo: '',
        loading: false,
        error: '',
        createdSpeaker: '',
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

    const createSpeaker = (speaker) => {
        return fetch(`http://localhost:8080/speaker/create`, {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: speaker
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

        createSpeaker(formData)
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
                        error: false,
                        loading: false,
                        createdSpeaker: data.name
                    });
                }
            });
    };

    const NewSpeaker = () => (
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
                <textarea onChange={handleChange('description')} className="form-control" value={description}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Status</label>
                <select onChange={handleChange('status')} className="form-control">
                    <option> Please Select </option>
                    <option value="NotApproved"> Not Approved </option>
                </select>
            </div>
            <br/>
            <button className="btn btn-outline-primary">Create Speaker</button>
        </form>
    );

    const ShowError = () => (
        <div className="alert alert-danger" style={{display: error ? '':'none'}}>
            {error}
        </div>
    );

    const ShowSuccess = () => (
        <div className="alert alert-info" style={{display: createdSpeaker ? '':'none'}}>
            <h2>{`${createdSpeaker}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (<div className="alert alert-success">
            <h2>Loading...</h2>
        </div>);

    return (
        <Layout titleheader="Add Speaker" titleDescription="G'day Jay, add new speakers here...">
            <div className="border border-info">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {ShowSuccess()}
                    {ShowError()}
                    {NewSpeaker()}
                </div>
            </div>
        </Layout>
    );
};


export default CreateSpeaker;
