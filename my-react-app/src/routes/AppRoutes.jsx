import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HomePage from '../pages/Home.jsx';
import TvShows from '../pages/TvShows.jsx';
import Movies from '../pages/Movies.jsx';
import ComingSoon from '../pages/NewComing.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tvshows" element={<TvShows/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/comingsoon" element={<ComingSoon/>} />
    </Routes>
);

export default AppRoutes;