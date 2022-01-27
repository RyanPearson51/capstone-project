import React from "react";
import cookie from "cookie";

import { Routes, Route, Navigate } from 'react-router-dom';
import Ratings from './containers/Ratings';
import Rating from './containers/Rating';
import CreateRating from './containers/CreateRating'
import Login from './containers/Login';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['isLoggedIn'] ? true : false;
};

const ProtectedRoute = ({ children }) => {
    return checkAuth() ? children : <Navigate to="/login" />;
}

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Ratings />} />
            <Route path="/rating/:id" element={<Rating />} />
            <Route
                exact
                path="/rating/create"
                element={
                    <ProtectedRoute>
                        <CreateRating />
                    </ProtectedRoute>
                } />
            <Route path="/login" element={<Login />}
            />
            <Route path="/logout" element={<Ratings />} />
        </Routes>
    );
};

export default Router;