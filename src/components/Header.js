import React, { Fragment } from 'react'
import { Col } from 'reactstrap'
import classes from './styles/Header.module.css'
import Helmet from '../utils/Helmet'
import Wrapper from '../utils/Wrapper'

const Header = () => {
    return (
        /* Helmet component */
        <Helmet title='Homepage'>
            <Fragment>
                <Wrapper className={classes.height}>
                    {/* xs='12' lg='12' */}
                    <Col xs='12' lg='12'>
                        Header
                    </Col>
                </Wrapper>
            </Fragment>
        </Helmet>
    )
}

export default Header