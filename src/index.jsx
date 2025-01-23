import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
