import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import MovieProvider from "./context/Movie.context";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode >
        <BrowserRouter>
        <MovieProvider>
    < 
 App / >
 </MovieProvider>
    </BrowserRouter>
    </React.StrictMode>
);
