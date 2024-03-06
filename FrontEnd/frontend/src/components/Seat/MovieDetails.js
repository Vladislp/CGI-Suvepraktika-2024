import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cinema/event/${id}`);
        const data = await response.json();
        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [id]);
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Movie ID: {id}</p>
      <h3>{movie.Title}</h3>
      <p>{movie.OriginalTitle}</p>
      <p>Genres: {movie.Genres}</p>
    </div>
  );
};

export default MovieDetails;
