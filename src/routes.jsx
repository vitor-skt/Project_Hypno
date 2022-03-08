import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import Contato from './pages/contato';


const mainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>
        </>
    )
}

export default mainRoutes;