import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './componant/App/App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "@fortawesome/fontawesome-free/css/all.min.css"





ReactDOM.render(
  <BrowserRouter basename='/#/'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


