import React from 'react';
import CinemaList from './components/XML2JS/CinemaList';
import upperNavImage from './components/Navigation/Logo.jpg';
import './App.css';
import DateTime from './components/utility/Date and Time/dateTime';
import EventList from './components/XML2JS/EventList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/Seat/MovieDetails';
import SeatPlan from './components/Seat/SeatPlan';
import Error404 from './components/Error/ErrorPage';
import Success from './components/Success/Success';

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
            <Route path="/" element={<>
              <CinemaList />
              <EventList />
            </>} />
            <Route path="/events" element={<EventList />} />
            <Route path="/success" element={<Success />}/>
            <Route path="/movie/seats/*" element={
              <>
                <MovieDetails />
                <SeatPlan />
              </>
            } />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
