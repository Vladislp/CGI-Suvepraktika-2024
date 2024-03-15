import React from 'react';
import DOMPurify from 'dompurify';

const MovieDetails = () => {
  const storedEvent = localStorage.getItem('selectedEvent');
  let parsedStoredEvent = null;

  if (storedEvent) {
    try {
      const sanitizedStoredEvent = DOMPurify.sanitize(storedEvent);
      parsedStoredEvent = JSON.parse(sanitizedStoredEvent);
    } catch (error) {
      console.error('Error parsing stored event:', error);
    }
  }

  return (
    <div>
      {parsedStoredEvent ? (
        <>
          <h1>{parsedStoredEvent.Title}</h1>
          <p>{parsedStoredEvent.OriginalTitle}</p>
          <p>Rating: {parsedStoredEvent.Rating}</p>
          <img src={parsedStoredEvent.Images?.EventMediumImagePortrait} alt="Event Poster" loading="lazy" />
          <p>Pikkus: {parsedStoredEvent.LengthInMinutes} minutid</p>
          <p>Tootmisaasta: {parsedStoredEvent.ProductionYear}</p>
          <p>Genres: {parsedStoredEvent.Genres}</p>
          <p>{parsedStoredEvent.shortSynopsis}</p>
        </>
      ) : (
        <h1>No movie selected</h1>
      )}
    </div>
  );
};

export default MovieDetails;
