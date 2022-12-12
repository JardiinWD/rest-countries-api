import React, { Fragment } from 'react'
import CountryCard from './CountryCard'
import Wrapper from '../utils/Wrapper'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import classes from './styles/Countries.module.scss'


const Countries = ({ allCountries, searchedCountry }) => {

    // Initial Data (as requested by the screenshot)
    //console.log(searchedCountry)

    return (
        /* Fragment */
        <Fragment>
            {/* Wrapper Component */}
            <Wrapper className={classes.countries}>
                {/* Row Component */}
                <Row className="gx-5 gy-3">
                    {
                        searchedCountry.length < 1 ? allCountries.map((el, index) => {
                            return (
                                /* lg='3' xs='12' */
                                <Col lg='3' xs='12' key={index}>
                                    {/* CountryCard component */}
                                    <CountryCard data={el} />
                                </Col>
                            )
                        }) : searchedCountry.map((el, index) => {
                            return (
                                /* lg='3' xs='12' */
                                <Col lg='3' xs='12' key={index}>
                                    {/* CountryCard component */}
                                    <CountryCard data={el} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Wrapper>
        </Fragment>
    )
}

export default Countries
