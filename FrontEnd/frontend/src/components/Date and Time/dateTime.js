import  React, { useState , useEffect } from 'react'

// Functional component for displaying real-time date and time
export const DateTime = () => {
    // State to hold the current date and time
    var [date,setDate] = useState(new Date());
    // Effect hook to update the date every second
    useEffect(() => {
        // Set up a timer to update the date every second
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        // Clean up function to clear the interval when the component is unmounted
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime