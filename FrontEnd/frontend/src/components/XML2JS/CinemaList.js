import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * CinemaList component to display a dropdown list of cinemas.
 */
const CinemaList = () => {
  const [cinemaData, setCinemaData] = useState([]);
  useEffect(() => {
    /**
     * Fetch cinema data from the server.
     */
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/cinema/data');
        const data = await response.json();
        setCinemaData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function on component mount.
  }, []);

  return (
    <div className='cinema-list'>
      {/* Dropdown component to select a cinema */}
      <Dropdown className='cinema-list-dropdown'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Cinema
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Map over cinema data and create dropdown items */}
          {cinemaData.map((cinema) => (
            <Dropdown.Item key={cinema.ID}>{cinema.Name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CinemaList;
