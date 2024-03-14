import React, { useState, useEffect } from 'react';
import './dateTime.css'; // Import CSS file for styling

// Functional component for displaying real-time date and time
export const DateTime = () => {
    // State to hold the current date and time
    const [date, setDate] = useState(new Date());

    // Effect hook to update the date every second
    useEffect(() => {
        // Set up a timer to update the date every second
        const timer = setInterval(() => setDate(new Date()), 1000);

        // Clean up function to clear the interval when the component is unmounted
        return function cleanup() {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='dateTime-container'>
            {/* Style the time and date elements */}
            <p className='time big-cartoon'>{date.toLocaleTimeString()}</p>
            <p className='date big-cartoon'>{date.toLocaleDateString()}</p>
        </div>
    );
};

export default DateTime;
