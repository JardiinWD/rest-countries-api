import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
// Helmet Utils
import Helmet from '../utils/Helmet'
// Wrapper Utils
import Wrapper from '../utils/Wrapper'
// Page Stylesheet
import classes from './styles/CountryDetail.module.scss'
// Format Number (for population)
import { FormatNumber } from '../utils/Format'
import { BsArrowLeft } from 'react-icons/bs'


const CountryDetails = () => {

    /* Take the Country names from URLs */
    const { id } = useParams()
    // Helmet Title with the first letter capitalized
    const helmetTitle = id.charAt(0).toUpperCase() + id.slice(1)
    // SIngle country' useState
    const [country, setCountry] = useState([])

    // useEffect hooks created for async functions 
    useEffect(() => {
        // API Method for the selected country
        // FIXME: Implement the useContext Tool
        const fetchSingleCountry = async () => {
            // Save on a variable my axios response
            const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`).then(response => response.data[0]).catch(error => console.error(error))
            // I need to fix some issues before I declared my country state
            console.log(response);
            // I declare some Variables (but I haven't initialized)
            let native; // For the Native Name
            let currency; // For the National currency

            // I have looped inside response.name.nativeName
            for (const key in response.name.nativeName) {
                // Then I saved in native the response at position key
                native = response.name.nativeName[key];
            }
            // I have looped inside response.currencies
            for (const key in response.currencies) {
                // Then I saved in currency the response at position key
                currency = response.currencies[key].name
            }

            // Then I will save the result and update my current countries state
            // This is the Object with my properties
            setCountry({
                flag: response.flags.png, // Flag Country
                name: response.name.common, // Name of the Country
                nativeName: native.common, // NativeNameObj
                population: response.population, // Population
                region: response.region, // Region
                subRegion: response.subregion, // SubRegion
                capital: response.capital[0], // Capital
                topLevel: response.tld[0], // Top Level
                currency: currency, // Currencies
                languages: response.languages, // Languages (Array)
                borderCountry: response.borders // Borders (Array)
            })
        }
        // I invoked my async function for the selected country
        fetchSingleCountry()
        // I've used id as a dependency
    }, [id])

    return (
        /* Helmet component */
        <Helmet className={classes.helmet} title={helmetTitle}>
            {/* classes.homepage */}
            <Wrapper className={classes.homepage}>
                {/* classes.row */}
                <Row className={classes.row}>
                    {/* lg='12' xs='12' */}
                    <Col className={classes.col_back} lg='2' xs='12'>
                        <Link to='/' className={classes.redirect}>
                            {/* Icon */}
                            <span><BsArrowLeft /></span>
                            {/* Text */}
                            <span>Back</span>
                        </Link>
                    </Col>
                </Row>
                {/* classes.row */}
                <Row className={`${classes.row} d-flex align-items-center justify-content-between`}>
                    {/* lg='6' xs='12' */}
                    <Col className={classes.flag} lg='5' xs='12'>
                        {/* country.flag */}
                        <img src={country.flag} alt={country.name} />
                    </Col>
                    {/* lg='6' xs='12' */}
                    <Col lg='6' xs='12'>
                        {/* Title */}
                        {/* Data Wrapper */}
                        {/* Borders */}
                    </Col>
                </Row>
            </Wrapper>
        </Helmet>
    )
}

export default CountryDetails