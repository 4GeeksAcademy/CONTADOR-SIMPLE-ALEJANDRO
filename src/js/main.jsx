import React from 'react';
import ReactDOM from 'react-dom/client';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import '../styles/index.css';


import Home from './components/Home'; // solo importamos Home, NO lo definimos aquí


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);