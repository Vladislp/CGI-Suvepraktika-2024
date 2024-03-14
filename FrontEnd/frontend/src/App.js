import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from 'antd';
import './App.css';

import UpperNavImage from './components/Navigation/Logo.jpg';
import DateTime from './components/utility/Date and Time/dateTime';
import CinemaList from './components/XML2JS/CinemaList';
import EventList from './components/XML2JS/EventList';
import MovieDetails from './components/Seat/MovieDetails';
import SeatPlan from './components/Seat/SeatPlan';
import Error404 from './components/Error/ErrorPage';
import Success from './components/Success/Success';
import Testing from './components/Callendar/calendar';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/success" element={<Success />} />
      <Route path="/events/calendar" element={<Testing />} />
      <Route path="/movie/seats/*" element={<MovieSeats />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <CinemaList />
      <EventList />
    </>
  );
}

function MovieSeats() {
  return (
    <>
      <MovieDetails />
      <SeatPlan />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className='upper-nav'>
          <img src={UpperNavImage} alt="Upper Nav" className="center" />
        </div>
        <div className='lower-nav'>
          <div className='languages-calendar'>
            <Button href="#" className="language-link">Eesti</Button>
            <Button href="#" className="language-link">Русский</Button>
            <Button href="#" className="language-link">English</Button>
            <Button href='/events/calendar'>Valige kuupäeva</Button>
          </div>
          <div className='dateTime'>
            <DateTime />
          </div>
        </div>
        <div className='body'>
          <RoutesComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
