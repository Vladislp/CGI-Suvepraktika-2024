import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from 'antd';

import UpperNavImage from './components/Navigation/Cinema-Logo.jpg';
import DateTime from './components/utility/Date and Time/dateTime';
import CinemaList from './components/Connection/CinemaList';
import EventList from './components/Connection/EventList';
import MovieDetails from './components/Seat/MovieDetails';
import SeatPlan from './components/Seat/SeatPlan';
import Error404 from './components/Error/ErrorPage';
import Success from './components/Success/Success';
import Testing from './components/Callendar/calendar';
import SignInSide from './components/Login/login';
import Link from 'antd/es/typography/Link';
import ParticleBackground from './components/utility/Background/particles';
import News from './components/utility/News/News';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/success" element={<Success />} />
      <Route path="/news" element={<News/>} />
      <Route path="/events/calendar" element={<Testing />} />
      <Route path="/movie/seats/*" element={<MovieSeats />} />
      <Route path="/*" element={<Error404 />} />
      <Route path="/login" element={<SignInSide />} />
    </Routes>
  );
}

function Home() {
  return (
    <main>
      <section>
        <CinemaList />
      </section>
      <section>
        <EventList />
        <div>
          <Link to="/sitemap">HTML Sitemap</Link>
        </div>
      </section>
    </main>
  );
}

function MovieSeats() {
  return (
    <main>
      <section>
        <MovieDetails />
      </section>
      <section>
        <SeatPlan />
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ParticleBackground />
        <header>
          <div className='upper-nav'>
            <img src={UpperNavImage} alt="Logo of cinema" className="center" loading="lazy" />
          </div>
        </header>
        <footer>
          <div className='lower-nav'>
            <div className='languages-calendar'>
              <Button href="#" className="language-link">Eesti</Button>
              <Button href="#" className="language-link">Русский</Button>
              <Button href="#" className="language-link">English</Button>
              <Button href='/events/calendar'>Valige kuupäeva</Button>
              <Button href='/login'>Logi sisse</Button>
              <Button href='/news'>Uudised</Button>
            </div>
            <div className='dateTime'>
              <DateTime />
            </div>
          </div>
        </footer>
        <div className='body'>
          <RoutesComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
