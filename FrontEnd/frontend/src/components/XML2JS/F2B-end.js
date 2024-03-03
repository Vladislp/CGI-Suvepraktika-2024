import React, { useState, useEffect } from 'react';

const CinemaList = () => {
  const [cinemaData, setCinemaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/cinema/data');
        const data = await response.json();
        setCinemaData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cinema List</h1>
      <ul>
        {cinemaData.map((cinema) => (
          <li key={cinema.ID}>{cinema.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CinemaList;
