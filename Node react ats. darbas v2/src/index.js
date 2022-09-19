import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import userReducer from "./features/user"
import reviewReducer from "./features/review"

const store = configureStore({
    reducer: {
        user: userReducer,
        reviews: reviewReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
            <App />
     

);

reportWebVitals();
