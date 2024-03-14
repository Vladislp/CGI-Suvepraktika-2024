import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

const EventList = () => {
  const [events, setEvents] = useState([]); // Events from apollo status
  const [loading, setLoading] = useState(true); // Track loading status
  const [error, setError] = useState(null); // Track error state
  const [selectedEvent, setSelectedEvent] = useState(null); // Selected event status for offCanvas
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State for handle ON/OFF of offCanvas

  const handleShowOffcanvas = (event) => {
    setSelectedEvent(event);
    localStorage.setItem('selectedEvent', JSON.stringify(event));
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setEvents([]);
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
        setLoading(false); // Update loading status
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setError(error); // Set error state
        setLoading(false); // Update loading status
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary" href='/'>Back Home</Button>}
      />
    );
  }

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
              <Link
                to={{
                  pathname: "/movie/seats",
                  state: { selectedEvent },
                }}
              >
                <Button onClick={() => handleCloseOffcanvas(selectedEvent)}>Vaata kohad</Button>
              </Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default EventList;
