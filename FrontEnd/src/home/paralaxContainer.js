import React, {Component} from 'react';
import image1 from './image/s3.png'
import './css/ParalaxStyles.css'

class ParalaxContainer extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <div className="parallax" style={{backgroundImage: image1}}>

                    <div className="parallax-container" style={{height: '500px'}} align="center">
                        <div className="parallax-container-inner">
                            <h2 style={{color:'white'}}>WISDOM IS ALL WEALTH</h2>
                            <button className="button button2" onClick={()=>{
                                window.location.replace('/registration')
                            }}>join with us</button>
                        </div>
                    </div>
                </div>

                <div className="parallax"></div>
            </div>

        )

    }
}


export default ParalaxContainer;
