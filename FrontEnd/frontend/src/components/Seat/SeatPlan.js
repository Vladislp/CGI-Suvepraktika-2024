// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import './SeatPlan.css'; // Import custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';

// Define the SeatPlan functional component
const SeatPlan = () => {
  // State variables to manage selected seats and their images
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatImages, setSeatImages] = useState({});
  const [occupiedSeats, setOccupiedSeats] = useState([]);

  // URLs for default and selected seat images
  const defaultSeatImage = 'https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-cinema-seat-png-image_6110496.png';
  const selectedSeatImage = 'https://cdn-icons-png.flaticon.com/512/302/302302.png';
  
  /*
  1) With the help of google: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
                              https://www.w3schools.com/jsref/jsref_random.asp
                              https://www.w3schools.com/js/js_random.asp
  2) And error picking/syntax correction AI. Done it.
  */

 // Function to simulate occupied seats with random coordinates
const markOccupiedSeats = () => {
  // Initialize an empty array to store occupied seat coordinates
  const occupied = [];
  // Define the total number of rows and columns in the seat grid
  const totalRows = 5; 
  const totalColumns = 6;
  // Define the total number of occupied seats to simulate
  const totalOccupiedSeats = 5;

  // Loop to randomly generate coordinates for occupied seats
  for (let i = 0; i < totalOccupiedSeats; i++) {
    // Generate a random row and column within the grid boundaries
    const randomRow = Math.floor(Math.random() * totalRows) + 1;
    // The + 1 is added to ensure that the generated random number falls within the desired range
    const randomColumn = Math.floor(Math.random() * totalColumns) + 1;
    // Add the random coordinates to the occupied array
    occupied.push({ row: randomRow, column: randomColumn });
  }

  // Set the state of occupied seats with the generated coordinates
  setOccupiedSeats(occupied);
};

// useEffect hook to run the markOccupiedSeats function once on component mount
useEffect(() => {
  markOccupiedSeats();
}, []);



  // Function to handle seat clicks
  const seatClicked = (row, column) => {
    // Check if the seat is already selected
    const isSelected = selectedSeats.some(seat => seat.row === row && seat.column === column);

    // Update the selected seats based on the click
    setSelectedSeats(prevSeats =>
      isSelected
        ? prevSeats.filter(seat => !(seat.row === row && seat.column === column))
        : [...prevSeats, { row, column }]
    );

    // Update the seat images based on the click
    setSeatImages(prevImages => ({
      ...prevImages,
      [`${row}-${column}`]: isSelected ? defaultSeatImage : selectedSeatImage,
    }));
  };

  // Function to render the seat plan grid
  const renderSeats = () => {
    const rows = 5; // Number of rows
    const columns = 6; // Number of columns

    const seatPlan = [];

    // Loop through rows and columns to create the seat plan
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        // Check if the seat is selected
        const isSelected = selectedSeats.some(seat => seat.row === i && seat.column === j);
        // Check if the seat is occupied
        const isOccupied = occupiedSeats.some(seat => seat.row === i && seat.column === j);
        const seatKey = `${i}-${j}`;

        // Create a seat element with an image and a button
        seatPlan.push(
          <div key={seatKey} className={`seat ${isSelected ? 'selected' : ''}`}>
            <img
              src={isOccupied ? selectedSeatImage : seatImages[seatKey] || defaultSeatImage}
              alt={`Seat ${i}-${j}`}
              style={{ maxWidth: '50%', height: 'auto' }}
            />
            <button onClick={() => seatClicked(i, j)} disabled={isOccupied}>
              {isOccupied ? 'Occupied' : 'Vali see koht'}
            </button>
          </div>
        );
      }
    }
    return seatPlan;
  };

  // JSX structure for the SeatPlan component
  return (
    <div>
      <div>
        <h3>Valitud kohad</h3>
        {/* Render the list of selected seats */}
        <ul className='item'>
          {selectedSeats.map(seat => (
            <li key={`${seat.row}-${seat.column}`}>
              <FontAwesomeIcon icon={faChair} /> Te olete valinud: {`${seat.row}-${seat.column}`}
            </li>
          ))}
        </ul>
        <Button>Edasi</Button>
      </div>
      <h2>Valige endale koht</h2>
      {/* Render the seat plan grid */}
      <div className="seat-plan">
        {renderSeats()}
      </div>
      <div className="rectangle"></div>
    </div>
  );
};

// Export the SeatPlan component as the default export
export default SeatPlan;
