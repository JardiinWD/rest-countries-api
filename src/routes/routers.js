import React from 'react'
// Routing components
import { Routes, Route, Navigate } from 'react-router-dom';
// Pages
import HomePage from '../pages/HomePage' // Homepage
import ErrorPage from '../pages/ErrorPage' // 404 Page
import CountryDetail from '../pages/CountryDetail' // 404 Page



const routers = () => {
    return (
        <Routes>
            {/* Navigate to Homepage */}
            <Route path='/' element={<Navigate to='/home' />} />
            {/* Homepage */}
            <Route path='/home' element={<HomePage />} />
            {/* ErrorPage */}
            <Route path='*' element={<ErrorPage />} />
            {/* CountryDetail */}
            <Route path='/country/:id' element={<CountryDetail />} />
        </Routes>
    )
}

export default routers