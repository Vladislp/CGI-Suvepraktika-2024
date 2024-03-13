import React from 'react';
import CinemaList from './components/XML2JS/CinemaList';
import upperNavImage from './components/Navigation/Logo.jpg';
import './App.css';
import DateTime from './components/utility/Date and Time/dateTime';
import EventList from './components/XML2JS/EventList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/Seat/MovieDetails';
import SeatPlan from './components/Seat/SeatPlan';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='upper-nav'>
          <img src={upperNavImage} alt="Upper Nav Image" className="center" />
        </div>
        <div className='lower-nav'>
          <a href="#" className="language-link">Eesti</a>
          <a href="#" className="language-link">Русский</a>
          <a href="#" className="language-link">English</a>
            <div className='dateTime'>
              <DateTime/>
            </div>
        </div>
        <div className='body'>
          <Routes>
            <Route path="/" element={<CinemaList />} />
            <Route path="/events" element={<EventList />} />
            {/* Render EventList only when the route is not "/movie/seats" */}
            <Route path="/movie/seats/*" element={
              <>
                <MovieDetails />
                <SeatPlan />
              </>
            } />
          </Routes>
          {/* Conditionally render EventList based on the route */}
          {window.location.pathname !== '/movie/seats' && <EventList />}
        </div>
      </div>
    </Router>
  );
}

export default App;
