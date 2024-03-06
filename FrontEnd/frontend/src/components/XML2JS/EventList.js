// https://react-bootstrap.netlify.app/docs/components/offcanvas

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  console.log(selectedEvent)

  const handleShowOffcanvas = (event) => {
    setSelectedEvent(event);
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  useEffect(() => {
    const params = {
      includePictures: true,
      includeGallery: true,
      includeVideos: true,
      includeLinks: true,
    };

    axios.get('http://localhost:8080/cinema/event', { params })
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
          <div key={event.ID} className="movie-box">
            <img src={event.Images.EventMediumImagePortrait} alt="Event Poster" />
            <h3>{event.Title}</h3>
            <p>{event.OriginalTitle}</p>
            <p>Genres: {event.Genres}</p>
            <Button onClick={() => handleShowOffcanvas(event)}>Vaata lähemalt</Button>
          </div>
        ))}
      </div>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Valitud film</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedEvent && (
            <>
              <h3>{selectedEvent.Title}</h3>
              <p>{selectedEvent.OriginalTitle}</p>
              <p>Rating: {selectedEvent.Rating}</p>
              <img src={selectedEvent.Images.EventMediumImagePortrait}></img>
              <p>Pikkus: {selectedEvent.LengthInMinutes} minutid</p>
              <p>Tootmisaasta: {selectedEvent.ProductionYear}</p>
              <p>Genres: {selectedEvent.Genres}</p>
              <p>{selectedEvent.shortSynopsis}</p>
              <Button href='#'>Vaata kohad</Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default EventList;
