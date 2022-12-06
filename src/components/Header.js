import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import classes from './styles/Header.module.scss'
import Wrapper from '../utils/Wrapper'
// Helmet component
import Helmet from '../utils/Helmet'


const Header = () => {
    return (
        /* Helmet */
        <Helmet className={classes.helmet} title='Homepage'>
            {/* Wrapper */}
            <Wrapper className={classes.header}>
                {/* Row */}
                <Row className={classes.row}>
                    {/* xs='12' lg='12' */}
                    <Col className={classes.col} xs='12' lg='12'>
                        Header
                    </Col>
                </Row>
            </Wrapper>
        </Helmet>
    )
}

export default Header