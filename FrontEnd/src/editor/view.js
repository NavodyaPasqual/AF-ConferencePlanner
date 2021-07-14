import React, {useState, useEffect, useRef} from "react";
import ShowImage from "../editor/speakerImage";
import '../editor/view.css';
import Timer from "../editor/timer";
import moment from "moment";
import Typed from "react-typed";
import ShowConferenceImage from "../editor/image";
import axios from "axios";
import renderHTML from "react-render-html";
import {Link} from "react-router-dom";

const View = () => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const [confarence, setConference] = useState([]);
    const [speakers, setSpeakers] = useState([]);
    const [error, setError] = useState([]);
    const [posts, setPosts] = useState([])

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
    };

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

    const getSpeakers = () => {
        return fetch(`http://localhost:8080/speaker/approved/speakers`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const loadSpeakers = () => {
        getSpeakers().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                setSpeakers(data)
            }
        })
    };

    const fetchTopics = () => {
        axios.get(`http://localhost:8080/topic/approved/topics`)
            .then(response => {
                console.log(response.data);
                setPosts(response.data)
            })
            .catch(error => alert('Error fetching topics'));
    }

    useEffect(() => {
        loadConference()
        startTimer();
        loadSpeakers();
        fetchTopics();
    }, [])


    return (
        <main>
        <div className="body shadow p-3 mb-5 bg-body">
            {confarence.map((c,i)=> (
                <div className="body" key={i} >
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
                        <ShowConferenceImage item={c} />
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
                        {/*<h4> 5 - 10 September </h4>*/}
                        <h4>{new Date(c.date).toLocaleDateString(undefined)}</h4>
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
            <div>
                <div>
                    <div className="description-title">
                        <h3> Speakers </h3>
                    </div>
                    <div className="container pt-3">
                        <div className="row">
                            {speakers.map((s,i) => (
                                <div className="col-4 mb-3">
                                    <div className="card" style={{border: '2px solid #666'}}>
                                        <div className="card-header" style={{background: "#daf0ff" }}>{s.name}</div>
                                        <div className="card-body">
                                            <ShowImage item={s}/>
                                            <p>{s.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="description-title">
                        <h3> Topics </h3>
                    </div>
                    <div className="container pt-3">
                        <div className="row">
                            {posts.map((p,i) => (
                                <div className="col-4 mb-3">
                                    <div className="card" style={{border: '2px solid #666'}}>
                                        <Link to={`/post/${p.slug}`}>
                                            <div className="card-header" style={{background: "#daf0ff" }}><h3>{p.title}</h3></div>
                                        </Link>
                                        <div className="card-body">
                                            <p>{renderHTML(p.content.substring(0, 100))}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
};
export default View;

