import React, { useEffect, useState } from 'react';
import './SeatPlan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button, Flex } from 'antd';
import { Helmet } from 'react-helmet';


const SeatPlan = () => {
  // State variables
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatImages, setSeatImages] = useState({});
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [numTickets, setNumTickets] = useState(1);

  // Image URLs
  const defaultSeatImage = 'https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-cinema-seat-png-image_6110496.png';
  const selectedSeatImage = 'https://cdn-icons-png.flaticon.com/512/302/302302.png';
  const customerChoiceImage = 'https://cdn-icons-png.freepik.com/512/4221/4221971.png';

  // Initialize occupied seats
  const markOccupiedSeats = () => {
    const occupied = [];
    const totalRows = 5;
    const totalColumns = 6;
    const totalOccupiedSeats = 5;

    for (let i = 0; i < totalOccupiedSeats; i++) {
      const randomRow = Math.floor(Math.random() * totalRows) + 1;
      const randomColumn = Math.floor(Math.random() * totalColumns) + 1;
      occupied.push({ row: randomRow, column: randomColumn });
    }

    setOccupiedSeats(occupied);
  };

  useEffect(() => {
    markOccupiedSeats();
  }, []); // Run once on component mount

useEffect(() => {
  const choosePresetSeats = (numTickets, occupiedSeats) => {
    const rows = 5;
    const columns = 6;

    const presetSeats = [];
    const middleRow = Math.ceil(rows / 2);
    const middleColumn = Math.ceil(columns / 2);

    let currentRow = middleRow;
    let currentColumn = middleColumn;

    for (let i = 0; i < numTickets; i++) {
      // Check if the current seat is occupied, if yes, move to the next seat
      while (occupiedSeats.some(seat => seat.row === currentRow && seat.column === currentColumn)) {
        currentColumn++;
        if (currentColumn > columns) {
          currentColumn = 1;
          currentRow++;
          if (currentRow > rows) {
            currentRow = 1; // Wrap around to the first row
          }
        }
      }

      // Add the available seat to the presetSeats array
      presetSeats.push({ row: currentRow, column: currentColumn });

      // Move to the next column
      currentColumn++;
      if (currentColumn > columns) {
        currentColumn = 1;
        currentRow++;
        if (currentRow > rows) {
          currentRow = 1; // Wrap around to the first row
        }
      }
    }

    // Set the selected seats and images
    setSelectedSeats(presetSeats);

    const presetSeatImages = presetSeats.reduce((images, seat) => {
      images[`${seat.row}-${seat.column}`] = selectedSeatImage;
      return images;
    }, {});

    setSeatImages(prevImages => ({
      ...prevImages,
      ...presetSeatImages,
    }));
  };

  choosePresetSeats(numTickets, occupiedSeats);
}, [numTickets, occupiedSeats]); // Run whenever numTickets or occupiedSeats change
 // Run whenever numTickets or occupiedSeats change

  // Handle seat click event
  const seatClicked = (row, column) => {
    const isSelected = selectedSeats.some((seat) => seat.row === row && seat.column === column);
    const isOccupied = occupiedSeats.some((seat) => seat.row === row && seat.column === column);

    if (!isOccupied) {
      setSelectedSeats((prevSeats) =>
        isSelected
          ? prevSeats.filter((seat) => !(seat.row === row && seat.column === column))
          : [...prevSeats, { row, column }]
      );

      setSeatImages((prevImages) => ({
        ...prevImages,
        [`${row}-${column}`]: isSelected ? defaultSeatImage : selectedSeatImage,
      }));
    }
  };

  useEffect(() => {
    sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  // Render seat elements
  const renderSeats = () => {
    const rows = 5;
    const columns = 6;
    const seatPlan = [];

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        const isSelected = selectedSeats.some((seat) => seat.row === i && seat.column === j);
        const isOccupied = occupiedSeats.some((seat) => seat.row === i && seat.column === j);
        const seatKey = `${i}-${j}`;

        seatPlan.push(
          <div key={seatKey} className={`seat ${isSelected ? 'selected' : ''}`}>
            <img
              src={
                isSelected
                  ? customerChoiceImage // Use customerChoice image for selected seats
                  : isOccupied
                  ? selectedSeatImage
                  : seatImages[seatKey] || defaultSeatImage
              }
              alt={`Seat ${i}-${j} plan of cinema`}
              style={{ maxWidth: '50%', height: 'auto' }}
              loading="lazy"
            />
            <button onClick={() => seatClicked(i, j)} disabled={isOccupied}>
              {isOccupied ? 'Võetud' : 'Vali see koht'}
            </button>
          </div>
        );
      }
    }

    return seatPlan;
  };

  // JSX structure
  return (
    <div>
      <Helmet>
        <link rel="prefetch" href={selectedSeatImage} />
        <link rel="prefetch" href={customerChoiceImage} />
        <link rel="prefetch" href={defaultSeatImage} />
      </Helmet>
      <div>
        <div>
          <label htmlFor="numTickets">Valige piletite arv: </label>
          <input
            type="number"
            id="numTickets"
            name="numTickets"
            value={numTickets}
            onChange={(e) => setNumTickets(e.target.value)}
            min="1"
            max="30"
            aria-label="Valige piletite arv"
          />
        </div>
        <h3>Valitud kohad</h3>
        <Link to="/" rel="noopener">
          <Flex gap="small" wrap="wrap">
            <Button type="primary">Tagasi Esilehele</Button>
          </Flex>
        </Link>
        <ul className="item">
          {selectedSeats.map((seat) => (
            <li key={`${seat.row}-${seat.column}`}>
              <FontAwesomeIcon icon={faChair} /> Te olete valinud: {`${seat.row}-${seat.column}`}
            </li>
          ))}
        </ul>
        <Link to={{
          pathname: "/success",
          state: { selectedSeats: selectedSeats } // Pass the selected seats as props
        }}>
          <Flex gap="small" wrap="wrap">
            <Button type="primary">Osta</Button>
          </Flex>
        </Link>
      </div>
      <h2>Valige endale koht</h2>
      <div className="seat-plan js-seat-plan">{renderSeats()}</div>
      <div className="rectangle"></div>
    </div>
  );
};

export default SeatPlan;
