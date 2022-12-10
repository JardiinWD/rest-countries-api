import React, { Fragment } from 'react'
import CountryCard from './CountryCard'
import Wrapper from '../utils/Wrapper'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import classes from './styles/Countries.module.scss'


const Countries = (props) => {

    // Initial Data (as requested by the screenshot)
    console.log(props);

    return (
        /* Fragment */
        <Fragment>
            {/* Wrapper Component */}
            <Wrapper className="">
                {/* Row Component */}
                <Row className="g-5">
                    {
                        props.data && props.data.slice(0, 8).map((el, index) => {
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
