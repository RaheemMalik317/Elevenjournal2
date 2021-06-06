import React, { useState, useEffect } from 'react';

const TimerApp =() => {
    const [secondElapsed, setSecondsElapsed] = useState(0);
    const tick = () => setSecondsElapsed(secondElapsed + 1);

    useEffect(() => {
        let interval = setInterval(() => tick(), 1000);
        console.log(interval);
        return () => clearInterval(interval)
    })

    return (
        <div>
            <h1 className="section-title">React Timer</h1>
            <div>Seconds Elapsed: {secondElapsed}</div>
        </div>
    );
};
export default TimerApp;