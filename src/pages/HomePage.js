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

// Components
import Countries from '../components/Countries'
import Inputs from '../components/Inputs'

const HomePage = () => {
    // Countries useState
    const [initialCountries, setInitialCountries] = useState([])
    // All countries useState (for filtering)
    const [allCountries, setAllCountries] = useState([])
    // Countries useState
    const [region, setRegion] = useState([])
    // Input Search useState
    const [searchCountry, setSearchCountry] = useState('')
    // API Method for 8 countries (Homepage) as requested by screenshot
    // FIXME: Implement the useContext Tool
    const fetchAllCountries = async () => {
        // Save on a variable my axios response
        const response = await axios.get("https://restcountries.com/v3.1/all").then(response => response.data).catch(error => console.error(error))
        // I will save all the countries on allCountries 
        setAllCountries(response)
        // Then I wanted to save just 8 results as seen by the screenshot
        const slicedResponse = response.slice(0, 8)
        // Then I will save the result and update my current countries state
        setInitialCountries(slicedResponse)
    }

    // FIXME: Implement the useContext Tool
    // API Method for Filtered regions as requested
    const fetchRegions = async () => {
        // Save on a variable my axios response
        const response = await axios.get("https://restcountries.com/v3.1/all").then(response => response.data).catch(error => console.error(error))
        // I create an empty array for my elements
        const regions = []
        // I have filtered my response 
        response.forEach(element => {
            // Take all the regions from my response
            const allRegions = element.region
            // I've push my full list of regions inside my empty array 
            regions.push(allRegions)
        });
        // I've created a new variable where I reduce the previous array with unique Values
        // I've used this method instead of set
        const uniqueRegions = regions.filter((el, index) => {
            return regions.indexOf(el) === index
        }).slice(0, 5)
        // I set my current state with my unique values
        setRegion(uniqueRegions)
    }

    // This function allows me to lifting the state of <Inputs /> component
    const onAddHandler = (input) => {
        if (!input) return
        if (input) {
            // Then I filter my results, based on what the user searched for
            const searchedResult = allCountries.find(item => {
                // I will return the single item that was equal to input field
                return item.name.common === input;
            })
            console.log(searchedResult);
            // I set my data just for the single country
            setSearchCountry(searchedResult)
            console.log(searchCountry);
        }
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
                        {/* onAddHandler => Fn for Search Input */}
                        {/* region => Data for Dropdown menu */}
                        <Inputs onAddHandler={onAddHandler} region={region} />
                    </Col>
                    {/* lg='12' xs='12' */}
                    <Col lg='12' xs='12'>
                        <Countries initialData={initialCountries} />
                    </Col>
                </Row>
            </Wrapper>
        </Helmet>
    )
}

export default HomePage