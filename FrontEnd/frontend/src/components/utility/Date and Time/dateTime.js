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

    return (
        <div className='dateTime-container'>
            <p className='time big-cartoon' aria-label="Mis kell on praegu ?">{date.toLocaleTimeString()}</p>
            <p className='date big-cartoon' aria-label='Mis kuupäev on täna ?'>{date.toLocaleDateString()}</p>
        </div>
    );
};

export default DateTime;
