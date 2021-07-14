import React, {Component} from 'react';
import './style/downloadPage.css'
import download from "./image/download.png";
class DownloadPage extends Component {
    render() {
        return (
            <div className="a p-3"><br/>
                <center>
                    <div className="container-2">
                        <div className="card shadow p-3 rounded"><br/>
                            <h4>DOWNLOAD WORKSHOP PROPOSAL TEMPLATE</h4>
                            <br/><br/>
                            <div className="center">
                                    <button className="button button2" onClick={()=>{
                                        window.location.replace('/workshop-template')
                                    }}>Download the template</button>

                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <img src={download} height="100px"/>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

export default DownloadPage;