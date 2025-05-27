import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// The main entry remains unchanged because App.js handles routing.
// If at any time we want stub routing only, we would switch App import to a custom stub router.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
