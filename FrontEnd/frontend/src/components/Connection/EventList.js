import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Result, Spin } from 'antd';
import DOMPurify from 'dompurify';

const EventList = ({ filteredMovies }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const handleShowOffcanvas = (event) => {
    const sanitizedEvent = DOMPurify.sanitize(JSON.stringify(event));
    localStorage.setItem('selectedEvent', sanitizedEvent);
    setSelectedEvent(event);
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const params = {
          includePictures: true,
          includeGallery: true,
          includeVideos: true,
          includeLinks: true,
        };

        const response = await axios.get(process.env.REACT_APP_API_URL, { params });
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (filteredMovies && filteredMovies.length > 0) {
      setDisplayedMovies(filteredMovies);
    } else {
      setDisplayedMovies(events);
    }
  }, [filteredMovies, events]);

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
        extra={<Button type="primary" href='/' aria-label="Tagasi esilehele">Tagasi esilehele</Button>}
      />
    );
  }

  return (
    <div className="event-list-container">
      <div className="movie-grid">
        {displayedMovies.map(event => (
          <div key={event.ID} className="movie-box">
            <img src={event.Images.EventMediumImagePortrait} alt="Event Poster" loading="lazy" />
            <h3>{event.Title}</h3>
            <p>{event.OriginalTitle}</p>
            <p>Genres: {event.Genres}</p>
            <Button aria-label="Vaata lähemalt" onClick={() => handleShowOffcanvas(event)}>Vaata lähemalt</Button>
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
              <h3>{DOMPurify.sanitize(selectedEvent.Title)}</h3>
              <p>{DOMPurify.sanitize(selectedEvent.OriginalTitle)}</p>
              <p>Rating: {DOMPurify.sanitize(selectedEvent.Rating)}</p>
              <img src={DOMPurify.sanitize(selectedEvent.Images.EventMediumImagePortrait)} alt="Event Poster" loading="lazy" />
              <p>Pikkus: {DOMPurify.sanitize(selectedEvent.LengthInMinutes)} minutid</p>
              <p>Tootmisaasta: {DOMPurify.sanitize(selectedEvent.ProductionYear)}</p>
              <p>Genres: {DOMPurify.sanitize(selectedEvent.Genres)}</p>
              <p>{DOMPurify.sanitize(selectedEvent.shortSynopsis)}</p>
              <Link
                to={{
                  pathname: "/movie/seats",
                  state: { selectedEvent },
                }}
                rel="noopener"
              >
                <Button aria-label="Vaata kohad" onClick={() => handleCloseOffcanvas(selectedEvent)}>Vaata kohad</Button>
              </Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default EventList;
