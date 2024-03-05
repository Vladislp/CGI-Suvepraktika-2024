import React from 'react';
import CinemaList from './components/XML2JS/F2B-end';
import upperNavImage from './components/Navigation/Logo.jpg';
import './App.css';
import DateTime from './components/Date and Time/dateTime';
import EventList from './components/XML2JS/EventList';
function App() {
  return (
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
        <CinemaList/>
      </div>
      <EventList/>
    </div>
  );
}

export default App;
