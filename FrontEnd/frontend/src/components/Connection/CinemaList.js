import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';

const CinemaList = () => {
  const [cinemaData, setCinemaData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cinemaResponse = await fetch(process.env.REACT_APP_CINEMA_URL);
        const cinemaData = await cinemaResponse.json();
        setCinemaData(cinemaData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const movies = await response.json();
  
        const allGenres = movies.reduce((genres, movie) => {
          const movieGenres = movie.Genres.split(',').map((genre) => genre.trim());
          genres.push(...movieGenres);
          return genres;
        }, []);
  
        const uniqueGenres = [...new Set(allGenres)];
  
        setGenres(uniqueGenres);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const movies = await response.json();
        
        const filteredMovies = movies.filter(movie => {
          const movieGenres = movie.Genres.split(',').map(genre => genre.trim());
          return movieGenres.includes(selectedGenre);
        });
  
        setFilteredMovies(filteredMovies);
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [selectedGenre]);
  
  const handleSelectGenre = (genre) => {
    setSelectedGenre(genre);
  }


  return (
    <><div className='cinema-list'>
      <Dropdown className='cinema-list-dropdown' aria-label="Valige kino asukoht">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Valige kino asukoht
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {cinemaData.map((cinema) => (
            <Dropdown.Item key={cinema.ID}>{cinema.Name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className='genre-dropdown' aria-label="Valige genre">
        <Dropdown.Toggle variant="success" id="dropdown-genre">
          Valige Genre
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {genres.map((genre) => (
            <Dropdown.Item key={genre} onClick={() => handleSelectGenre(genre)}>
              {genre}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div><div>
        <EventList filteredMovies={filteredMovies} />
      </div></>
  );
};

export default CinemaList;
