import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const params = {
            includePictures: true,
            includeGallery: true,
            includeVideos: true,
            includeLinks: true,
        }
        // Fetch data from Spring Boot API
        axios.get('http://localhost:8080/cinema/event', {params})
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
        <div>
            <h2>Event List</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h3>{event.Title}</h3>
                        <h3>{event.OriginalTitle}</h3>
                        {console.log(event)}
                        <img src={event.Images.EventMediumImagePortrait} alt="Event Poster" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
