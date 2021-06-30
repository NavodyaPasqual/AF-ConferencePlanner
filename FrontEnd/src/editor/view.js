import React, {useState, useEffect, useRef} from "react";
import ShowImage from "./image";
import './view.css';
import Timer from "./timer";
import moment from "moment";
import Typed from "react-typed";

const View = () => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const [confarence, setConference] = useState([]);
    const [error, setError] = useState([]);

    let interval = useRef();

    const startTimer = () => {
        const countDown = new Date('2021-09-05T00:00:00.000Z').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDown - now;

            const Days = Math.floor(distance / (24 * 60 * 60 * 1000));

            const Hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));

            const Minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));

            const Seconds = Math.floor(distance % (60 * 1000) / (1000));

            if (distance < 0) {
                //stop
                clearInterval(interval.current);
            } else {
                //update
                setDays(Days);
                setHours(Hours);
                setMinutes(Minutes);
                setSeconds(Seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
    })

    // get the admin approved conference
    const getConference = () => {
        return fetch(`http://localhost:8080/conference/approved/conferences`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const loadConference = () => {
        getConference()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    console.log(data[0].date)
                    setConference(data)
                }
            })
    };
    useEffect(() => {
        loadConference();
    }, []);


    return (
        <div className="body">
                {confarence.map((c,i)=> (
                    <div className="body" key={i} style={{border: '2px solid #666'}}>
                        <div className="head">
                            <Typed
                                loop
                                typeSpeed={140}
                                strings={[c.title]}
                                loopCount={0}
                                showCursor
                                cursorChar="|"
                                className="self-typed"
                            />
                        </div>
                        <div>
                            <ShowImage item={c} />
                        </div>
                        <div className="description-title" >
                            <h3> About The Event </h3>
                        </div>
                        <div className="description">
                            <h6>{c.description}</h6>
                        </div>
                        <div className="description-title" >
                            <h3> On </h3>
                        </div>
                        <div className="description">
                            <h4> 5 - 10 September </h4>
                            {/*<h4>{c.date}</h4>*/}
                        </div>
                        <div className="description-title" >
                            <h3> In </h3>
                        </div>
                        <div className="description" >
                            <h3> {c.venue} </h3>
                        </div>
                        <div className="timer">
                            <Timer
                                days={days}
                                hours={hours}
                                minutes={minutes}
                                seconds={seconds}/>
                        </div>
                    </div>
                ))}
        </div>
    )
};
export default View;

