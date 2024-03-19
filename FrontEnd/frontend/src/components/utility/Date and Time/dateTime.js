import React, { useState, useEffect } from 'react';
import './dateTime.css';

// Functional component for displaying real-time date and time
export const DateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        };
    }, []);

    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

    return (
        <div className='dateTime-container'>
            <p className='time big-cartoon' aria-label="Mis kell on praegu ?">{date.toLocaleTimeString(undefined, timeOptions)}</p>
            <p className='date big-cartoon' aria-label='Mis kuupäev on täna ?'>{date.toLocaleDateString('en-GB', dateOptions)}</p>
        </div>
    );
};

export default DateTime;
