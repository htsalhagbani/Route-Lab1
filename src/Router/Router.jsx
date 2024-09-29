// src/Router/Router.jsx
import React from 'react';
import {
    createBrowserRouter,
    Route,
} from "react-router-dom";
import Home from '../Pages/Home';
import ErrorPage from '../Pages/Error';
import Login from '../Pages/Login';
import App from '../App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>, 
        errorElement: <ErrorPage/>,

    },
    {
        path: "/home",
        element: <Home/>, 

    },
    {
        path: "/Login",
        element: <Login/>,

    },

]);

export default router; 
