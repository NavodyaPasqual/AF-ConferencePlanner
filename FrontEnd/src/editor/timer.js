import React, {Fragment} from 'react';
import './view.css';

// timer for countdown remaining time for conference
const Timer = ({days, hours, minutes, seconds}) => {
    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <div className="clock">
                        <section>
                            <p>{days}</p>
                            <strong>Days</strong>
                        </section>
                        <span className="semi">:</span>
                        <section>
                            <p>{hours}</p>
                            <strong>Hours</strong>
                        </section>{" "}
                        <span className="semi">:</span>
                        <section>
                            <p>{minutes}</p>
                            <strong>Minutes</strong>
                        </section>{" "}
                        <span className="semi">:</span>
                        <section>
                            <p>{seconds}</p>
                            <strong>Seconds</strong>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    );
};


export default Timer;
