import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
// API URL (For All country) : "https://restcountries.com/v3.1/all"
// API_URL (For a specific country) : "https://restcountries.com/v3.1/name/${name}"
import { Col, Row } from 'reactstrap'
// Helmet Utils
import Helmet from '../utils/Helmet'
// Wrapper Utils
import Wrapper from '../utils/Wrapper'
// Page Stylesheet
import classes from './styles/Homepage.module.scss'
// Components
import Countries from '../components/Countries'
import Inputs from '../components/Inputs'
import Pagination from '../components/Pagination'




const HomePage = () => {
    // All countries useState (for filtering)
    const [allCountries, setAllCountries] = useState([])
    // useState for inputs 
    const [searchedCountry, setSearchedCountry] = useState([])
    // Countries useState
    const [region, setRegion] = useState([])
    // useState for current Page
    const [currentPage, setCurrentPage] = useState(1) // Initial Index
    const [cardsPerPage, setCardsPerPage] = useState(8) // I want 8 cards per page
    const lastPostIndex = currentPage * cardsPerPage // This is the last index of my pagination
    const firstPostIndex = lastPostIndex - cardsPerPage // This is the first index of my pagination
    const currentCards = allCountries.slice(firstPostIndex, lastPostIndex) // This is my array sliced by index
    const filteredCards = searchedCountry.slice(firstPostIndex, lastPostIndex)


    // API Method for fetching countries 
    const fetchAllCountries = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all").then(response => response.data).catch(error => console.error(error))
        setAllCountries(response)
    }

    // API Method for fetching regions
    const fetchRegions = async () => {
        // Save on a variable my axios response
        const response = await axios.get("https://restcountries.com/v3.1/all").then(response => response.data).catch(error => console.error(error))
        const regions = [] // An empty array for my elements
        // I have filtered my response 
        response.forEach(element => {
            const allRegions = element.region
            regions.push(allRegions) // I push on my empty array
        });
        // I've created a new variable where I reduce the previous array with unique Values
        const uniqueRegions = regions.filter((el, index) => {
            return regions.indexOf(el) === index
        }).slice(0, 5)
        setRegion(uniqueRegions)
    }

    // useEffect hooks created for async functions invoke
    useEffect(() => {
        // I invoked my async function (For 8 countries) right here
        fetchAllCountries()
        // I invoked my async function for regions
        fetchRegions()
        // I don't need any dependencies
    }, [])


    return (
        /* Helmet component */
        <Helmet className={classes.helmet} title='Homepage'>
            {/* classes.height */}
            <Wrapper className={classes.homepage}>
                {/* Row */}
                <Row className={classes.row}>
                    {/* lg='12' xs='12' */}
                    <Col lg='12' xs='12'>
                        {/* setSearchedCountry => Fn for Search Input */}
                        {/* region => Data for Dropdown menu */}
                        <Inputs
                            allCountries={allCountries}
                            setAllCountries={setAllCountries}
                            setSearchedCountry={setSearchedCountry}
                            setCurrentPage={setCurrentPage}
                            region={region}
                        />
                    </Col>
                    {/* lg='12' xs='12' */}
                    <Col lg='12' xs='12'>
                        <Countries
                            allCountries={currentCards}
                            searchedCountry={filteredCards}
                        />
                    </Col>
                    {/* lg='12' xs='12' */}
                    <Col className={classes.pagination} lg='12' xs='12'>
                        {/* Pagination Component */}
                        <Pagination
                            totalCards={allCountries.length}
                            filteredCards={searchedCountry.length}
                            cardsPerPage={cardsPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    </Col>
                </Row>
            </Wrapper>
        </Helmet>
    )
}

export default HomePage