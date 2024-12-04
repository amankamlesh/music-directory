import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS import
import App from './App';

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
