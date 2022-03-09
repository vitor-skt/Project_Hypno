import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import Contato from './pages/contato';
import AboutMe from './pages/about';


const mainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/AboutMe" element={<AboutMe />} />
            </Routes>
        </>
    )
}

export default mainRoutes;