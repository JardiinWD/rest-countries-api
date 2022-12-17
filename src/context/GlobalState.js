import React, { createContext, useState } from 'react'


// Create my initial State, setted as False
const initialState = {
    darkMode: true
}

export const GlobalContextProvider = ({ children }) => {
    // I've created the useReducer hook, I will pass GlobalReducer and the initial State 
    const [mode, setMode] = useState(initialState.darkMode)

    // I've created the switchmode fn, that allows me to change mode (light/dark)
    const switchMode = () => {
        // I've updated my global state with the "not" operator
        setMode(!mode)
        // Then I will set my condition for the light-theme mode
        mode ? document.body.classList.add("light-theme") : document.body.classList.remove("light-theme")
    }

    // I have to return my Provider and wrapping my children
    // In this case App Component
    return (
        <GlobalContext.Provider value={
            {
                mode,
                switchMode,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

// I've created my global context function
export const GlobalContext = createContext(initialState)