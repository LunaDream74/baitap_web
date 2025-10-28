import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure it ends with .jsx
import './index.css';     // Import your global stylesheet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);