import React, { useContext } from 'react'
// Routing components
import { Routes, Route, Navigate } from 'react-router-dom';
// Pages
import HomePage from '../pages/HomePage' // Homepage
import ErrorPage from '../pages/ErrorPage' // 404 Page
import CountryDetails from '../pages/CountryDetails' // 404 Page
// GlobalContext
import { GlobalContext } from '../context/GlobalState'


const Routers = () => {
    // I will invoke the Global Context
    const { region, allCountries, setAllCountries } = useContext(GlobalContext)
    return (
        <Routes>
            {/* Navigate to Homepage */}
            <Route path='/' element={<Navigate to='/home' />} />
            {/* Homepage */}
            <Route path='/home' element={<HomePage region={region} allCountries={allCountries} setAllCountries={setAllCountries} />} />
            {/* ErrorPage */}
            <Route path='*' element={<ErrorPage />} />
            {/* CountryDetail */}
            <Route path='/home/:id' element={<CountryDetails allCountries={allCountries} />} />
        </Routes>
    )
}

export default Routers