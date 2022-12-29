import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'


// Create my initial State, setted as False
const initialState = {
    darkMode: true,
    allCountries: [],
    selectedRegion: []
}

export const GlobalContextProvider = ({ children }) => {
    // I've created the useReducer hook, I will pass GlobalReducer and the initial State 
    const [mode, setMode] = useState(initialState.darkMode)
    // All countries useState (for filtering)
    const [allCountries, setAllCountries] = useState(initialState.allCountries)
    // Countries useState for Regions
    const [region, updateRegion] = useState(initialState.selectedRegion)

    // I've created the switchmode fn, that allows me to change mode (light/dark)
    const switchMode = () => {
        // I've updated my global state with the "not" operator
        setMode(!mode)
        // Then I will set my condition for the light-theme mode
        mode ? document.body.classList.add("light-theme") : document.body.classList.remove("light-theme")
    }

    // useEffect hooks created for async functions invoke
    useEffect(() => {
        // API Method for fetching countries 
        const fetchAllCountries = async () => {
            const response = await axios.get("https://restcountries.com/v3.1/all").then(response => response.data).catch(error => console.error(error))
            setAllCountries(response)
        }

        if (allCountries.length <= 0) {
            fetchAllCountries()
        }

        // API Method for fetching regions
        const fetchRegions = async () => {
            const regions = [] // An empty array for my elements
            // I have filtered my countries
            allCountries.forEach(element => {
                const allRegions = element.region
                regions.push(allRegions) // I push on my empty array
            });
            // I've created a new variable where I reduce the previous array with unique Values
            const uniqueRegions = regions.filter((el, index) => {
                return regions.indexOf(el) === index
            }).slice(0, 5)
            // I will update my region state
            updateRegion(uniqueRegions)
        }

        if (region.length <= 0) {
            fetchRegions()
        }
    }, [allCountries, region])


    // I have to return my Provider and wrapping my children
    // In this case App Component
    return (
        <GlobalContext.Provider value={
            {
                mode,
                switchMode,
                setAllCountries,
                region,
                allCountries
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

// I've created my global context function
export const GlobalContext = createContext(initialState)