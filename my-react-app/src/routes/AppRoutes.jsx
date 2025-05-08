import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HomePage from '../pages/Home.jsx';
import TvShows from '../pages/TvShows.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tvshows" element={<TvShows/>} />
    </Routes>
);

export default AppRoutes;