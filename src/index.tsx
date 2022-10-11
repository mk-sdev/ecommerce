//https://www.googleapis.com/books/v1/volumes?q=bookstore&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 // </React.StrictMode>
);

//scrol restoration, uporządkowanie kodu (usunięcie niepotrzebnych rzeczy), czy jakieś nazwy ze sobą nie kolidują, dostosować do typescriptu
//padding przy .component itp, stopka