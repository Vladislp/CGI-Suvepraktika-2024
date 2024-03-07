import React from 'react';

const MovieDetails = () => {
  // Retrieve the stored event from localStorage
  const storedEvent = JSON.parse(localStorage.getItem('selectedEvent'));

  if (!storedEvent) {
    // Handle the case where the stored event is not available
    return (
      <div>
        <h1>No movie selected</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{storedEvent.Title}</h1>
      <p>{storedEvent.OriginalTitle}</p>
      <p>Rating: {storedEvent.Rating}</p>
      <img src={storedEvent.Images.EventMediumImagePortrait} alt="Event Poster" />
      <p>Pikkus: {storedEvent.LengthInMinutes} minutid</p>
      <p>Tootmisaasta: {storedEvent.ProductionYear}</p>
      <p>Genres: {storedEvent.Genres}</p>
      <p>{storedEvent.shortSynopsis}</p>
    </div>
  );
};

export default MovieDetails;
