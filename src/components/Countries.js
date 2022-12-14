import React, { Fragment, useContext } from 'react'
import CountryCard from './CountryCard'
import Wrapper from '../utils/Wrapper'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import classes from './styles/Countries.module.scss'
// GlobalContext
import { GlobalContext } from '../context/GlobalState'

const Countries = ({ allCountries, searchedCountry }) => {

    // I will invoke the Global Context
    const { mode } = useContext(GlobalContext)

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
