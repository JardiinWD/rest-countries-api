import React, { Fragment } from 'react'
import CountryCard from './CountryCard'
import Wrapper from '../utils/Wrapper'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import classes from './styles/Countries.module.scss'


const Countries = (props) => {

    // Initial Data (as requested by the screenshot)
    const { initialData } = props


    return (
        /* Fragment */
        <Fragment>
            {/* Wrapper Component */}
            <Wrapper className="">
                {/* Row Component */}
                <Row className="g-5">
                    {
                        initialData.map((el, index) => {
                            return (
                                <Col lg='3' xs='12' key={index}>
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
