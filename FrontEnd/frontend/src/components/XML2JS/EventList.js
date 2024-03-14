import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Result, Spin } from 'antd';

const EventList = ({ filteredMovies }) => { 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [selectedEvent, setSelectedEvent] = useState(null); 
  const [showOffcanvas, setShowOffcanvas] = useState(false); 
  
  const handleShowOffcanvas = (event) => {
    setSelectedEvent(event);
    localStorage.setItem('selectedEvent', JSON.stringify(event));
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setSelectedEvent(null); 
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
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container"> 
        <Spin className="" size="large" />
      </div>
    );
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
        {filteredMovies ? filteredMovies.map(event => (
          <div key={event.ID} className="movie-box">
            <img src={event.Images.EventMediumImagePortrait} alt="Event Poster" />
            <h3>{event.Title}</h3>
            <p>{event.OriginalTitle}</p>
            <p>Genres: {event.Genres}</p>
            <Button onClick={() => handleShowOffcanvas(event)}>Vaata lähemalt</Button>
          </div>
        )) : null}
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
              <img src={selectedEvent.Images.EventMediumImagePortrait} alt="Event Poster" />
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
