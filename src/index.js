import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";

// Import the App component
import App from './containers/App.js';

// Bootstrap the App component
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <ParallaxProvider>
         <App />
      </ParallaxProvider>
   </BrowserRouter>
);
