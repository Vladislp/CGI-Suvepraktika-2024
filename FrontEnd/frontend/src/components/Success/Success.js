import React from 'react';
import { Button, Result } from 'antd';

const Success = () => {
  // Retrieve selected seats from sessionStorage
  const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats')) || [];

  return (
    <Result
      status="success"
      title="Successfully Purchased tickets!"
      subTitle="Order number: 2017182818828182881."
      extra={[
        <Button type="primary" key="console" href='/'>
          Esilehele
        </Button>,
      ]}
    >
      <div>
        <h3>Ostetud piletid:</h3>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>Te olete valinud kohad: {seat.row}-{seat.column}</li>
          ))}
        </ul>
      </div>
    </Result>
  );
};

export default Success;
