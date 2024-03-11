// Import necessary modules and components
import React, { useState } from 'react';
import './SeatPlan.css'; // Import custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';

// Define the SeatPlan functional component
const SeatPlan = () => {
  // State variables to manage selected seats and their images
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatImages, setSeatImages] = useState({});

  // URLs for default and selected seat images
  const defaultSeatImage = 'https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-cinema-seat-png-image_6110496.png';
  const selectedSeatImage = 'https://cdn-icons-png.flaticon.com/512/302/302302.png';

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
        const seatKey = `${i}-${j}`;

        // Create a seat element with an image and a button
        seatPlan.push(
          <div key={seatKey} className={`seat ${isSelected ? 'selected' : ''}`}>
            <img
              src={seatImages[seatKey] || defaultSeatImage}
              alt={`Seat ${i}-${j}`}
              style={{ maxWidth: '50%', height: 'auto' }}
            />
            <button onClick={() => seatClicked(i, j)}>Vali see koht</button>
          </div>
        );
      }
    }
    return seatPlan;
  };

  // JSX structure for the SeatPlan component
  return (
    <div>
      <h2>Select Your Seats</h2>
      {/* Render the seat plan grid */}
      <div className="seat-plan">
        {renderSeats()}
      </div>
      <div>
        <div className="rectangle"></div>
        <h3>Selected Seats:</h3>
        {/* Render the list of selected seats */}
        <ul className='item'>
          {selectedSeats.map(seat => (
            <li key={`${seat.row}-${seat.column}`}>
              <FontAwesomeIcon icon={faChair} /> {`${seat.row}-${seat.column}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Export the SeatPlan component as the default export
export default SeatPlan;
