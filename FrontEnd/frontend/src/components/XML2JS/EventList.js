import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const params = {
            includePictures: true,
            includeGallery: true,
            includeVideos: true,
            includeLinks: true,
            listType: 'CommingSoon',
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
        <div className="event-list-container">
            <div className="movie-grid">
                {events.map(event => (
                    <div key={event.id} className="movie-box">
                        <img src={event.Images.EventMediumImagePortrait} alt="Event Poster" />
                        <h3>{event.Title}</h3>
                        <p>{event.OriginalTitle}</p>
                        <p>Genres: {event.Genres}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventList;
