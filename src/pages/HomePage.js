import React, { useState } from 'react'
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

const HomePage = ({ region, allCountries, setAllCountries }) => {

    // useState for inputs 
    const [searchedCountry, setSearchedCountry] = useState([])
    // useState for current Page
    const [currentPage, setCurrentPage] = useState(1) // Initial Index
    const [cardsPerPage] = useState(8) // I want 8 cards per page
    const lastPostIndex = currentPage * cardsPerPage // This is the last index of my pagination
    const firstPostIndex = lastPostIndex - cardsPerPage // This is the first index of my pagination
    const currentCards = allCountries.slice(firstPostIndex, lastPostIndex) // This is my array sliced by index
    const filteredCards = searchedCountry.slice(firstPostIndex, lastPostIndex)

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