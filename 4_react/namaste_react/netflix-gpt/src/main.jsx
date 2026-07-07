import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import './index.css';

// This is how it should be used down below:
createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);