import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function loadCSS() {
  const link = document.createElement('link');
  link.href = './App.css';
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.async = true;
  document.head.appendChild(link);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

loadCSS();
