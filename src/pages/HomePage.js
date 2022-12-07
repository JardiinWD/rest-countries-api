import React, { useState, useEffect } from 'react'
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

const HomePage = () => {
    const [countries, setCountries] = useState([])

    // API Method for 8 countries (Homepage) as requested on the screenshot
    const fetchAllCountries = async () => {
        // Save on a variable my axios response
        const response = await axios.get("https://restcountries.com/v3.1/all").then(response => response.data).catch(error => console.error(error))
        // Then I wanted to save just 8 results as seen by the screenshot
        const slicedResponse = response.slice(0, 8)
        // Then I will save the result and update my current countries state
        setCountries(slicedResponse)
    }
    // useEffect hooks created for async functions invoke
    useEffect(() => {
        // I invoked my async function (For 8 countries) right here
        fetchAllCountries()
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
                    <Col lg='12' xs='12'>Homepage</Col>
                </Row>
            </Wrapper>
        </Helmet>
    )
}

export default HomePage