import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';

/**
 * CinemaList component to display a dropdown list of cinemas.
 */
const CinemaList = ({}) => {
  const [cinemaData, setCinemaData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch cinema data
        const cinemaResponse = await fetch('http://localhost:8080/cinema/data');
        const cinemaData = await cinemaResponse.json();
        setCinemaData(cinemaData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  /* Using old example and syntax errors with AI */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/cinema/event');
        const movies = await response.json();
  
        // Extract and collect all genres
        const allGenres = movies.reduce((genres, movie) => {
          // Split the genres string into an array
          const movieGenres = movie.Genres.split(',').map((genre) => genre.trim());
  
          // Collect all genres into a single array
          genres.push(...movieGenres);
  
          return genres;
        }, []);
  
        // Remove duplicate genres to get unique genres
        const uniqueGenres = [...new Set(allGenres)];
  
        // Set the genres state
        setGenres(uniqueGenres);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Invoke the fetchData function on component mount
  }, []); // Empty dependency array indicates it should run once on mount
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/cinema/event');
        const movies = await response.json();
        
        // Filter movies based on the selected genre
        const filteredMovies = movies.filter(movie => {
          const movieGenres = movie.Genres.split(',').map(genre => genre.trim());
          return movieGenres.includes(selectedGenre);
        });
  
        console.log(filteredMovies);
        // Set the filtered movies state
        setFilteredMovies(filteredMovies);
  
        // You can set state or do further processing with filteredMovies
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [selectedGenre]); // Trigger the effect whenever selectedGenre changes
  
  const handleSelectGenre = (genre) => {
    setSelectedGenre(genre);
  }


  return (
    <><div className='cinema-list'>
      {/* Dropdown component to select a cinema */}
      <Dropdown className='cinema-list-dropdown'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Valige kino asukoht
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Map over cinema data and create dropdown items */}
          {cinemaData.map((cinema) => (
            <Dropdown.Item key={cinema.ID}>{cinema.Name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Dropdown component to select a genre */}
      <Dropdown className='genre-dropdown'>
        <Dropdown.Toggle variant="success" id="dropdown-genre">
          Valige Genre
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Map over genres and create dropdown items */}
          {genres.map((genre) => (
            <Dropdown.Item key={genre} onClick={() => handleSelectGenre(genre)}>
              {genre}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div><div>
        {/* Pass the filtered movies as a prop to the EventList component */}
        <EventList filteredMovies={filteredMovies} />
      </div></>
  );
};

export default CinemaList;
