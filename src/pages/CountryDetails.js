import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
// Helmet Utils
import Helmet from '../utils/Helmet'
// Wrapper Utils
import Wrapper from '../utils/Wrapper'
// Page Stylesheet
import classes from './styles/CountryDetail.module.scss'
// Format Query
import { FormatNumber } from '../utils/Format'

const CountryDetails = () => {

    /* Take the Country names from URLs */
    const { id } = useParams()
    // Helmet Title with the first letter capitalized
    const helmetTitle = id.charAt(0).toUpperCase() + id.slice(1)

    return (
        /* Helmet component */
        <Helmet className={classes.helmet} title={helmetTitle}>
            {/* classes.homepage */}
            <Wrapper className={classes.homepage}>
                {/* classes.row */}
                <Row className={classes.row}>
                    {/* lg='12' xs='12' */}
                    <Col lg='12' xs='12'>
                        Country Details
                    </Col>
                </Row>
            </Wrapper>
        </Helmet>
    )
}

export default CountryDetails