import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're importing from 'react-dom/client'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
