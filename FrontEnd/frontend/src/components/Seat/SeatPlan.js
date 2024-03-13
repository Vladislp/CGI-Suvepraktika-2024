import React, { useEffect, useState } from 'react';
import './SeatPlan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';

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

  // Choose preset seats based on the selected number of tickets
  const choosePresetSeats = () => {
    const rows = 5;
    const columns = 6;

    const presetSeats = [];
    const middleRow = Math.ceil(rows / 2);
    const middleColumn = Math.ceil(columns / 2);

    for (let i = 0; i < numTickets; i++) {
      const presetSeat = { row: middleRow, column: middleColumn + i };
      presetSeats.push(presetSeat);
    }

    // Filter out preset seats that are already occupied
    const availablePresetSeats = presetSeats.filter((seat) => {
      return !occupiedSeats.some((occupiedSeat) => occupiedSeat.row === seat.row && occupiedSeat.column === seat.column);
    });

    setSelectedSeats(availablePresetSeats);

    const presetSeatImages = availablePresetSeats.reduce((images, seat) => {
      images[`${seat.row}-${seat.column}`] = selectedSeatImage;
      return images;
    }, {});

    setSeatImages((prevImages) => ({
      ...prevImages,
      ...presetSeatImages,
    }));
  };

  useEffect(() => {
    markOccupiedSeats();
  }, []); // Run once on component mount

  useEffect(() => {
    choosePresetSeats();
  }, [numTickets, occupiedSeats]); // Run whenever numTickets or occupiedSeats change

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
                  ? customerChoiceImage
                  : isOccupied
                  ? selectedSeatImage
                  : seatImages[seatKey] || defaultSeatImage
              }
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

  // JSX structure
  return (
    <div>
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
          />
        </div>
        <h3>Valitud kohad</h3>
        <ul className="item">
          {selectedSeats.map((seat) => (
            <li key={`${seat.row}-${seat.column}`}>
              <FontAwesomeIcon icon={faChair} /> Te olete valinud: {`${seat.row}-${seat.column}`}
            </li>
          ))}
        </ul>
      </div>
      <h2>Valige endale koht</h2>
      <div className="seat-plan">{renderSeats()}</div>
      <div className="rectangle"></div>
    </div>
  );
};

export default SeatPlan;
