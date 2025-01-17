import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18 and above
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root for React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
