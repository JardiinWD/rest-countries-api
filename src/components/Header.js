import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import classes from './styles/Header.module.scss'
import Wrapper from '../utils/Wrapper'
// Link component
import { Link } from 'react-router-dom'
// Icon
import { BsMoonFill } from 'react-icons/bs'

const Header = () => {
    return (
        /* Helmet */
        <Fragment>
            {/* Wrapper */}
            <Wrapper className={classes.header}>
                {/* Row */}
                <Row className={classes.row}>
                    {/* xs='12' lg='12' */}
                    <Col className="d-flex justify-content-between align-items-center" xs='12' lg='12'>
                        {/* Header Title */}
                        <Link className={classes.link} to='/home'>Where in the world?</Link>
                        {/* Darkmode toggle */}
                        <div className={`${classes.toggle}`}>
                            {/* Icon */}
                            <span className={classes.moon}>
                                {/* BsMoonFill */}
                                <BsMoonFill />
                            </span>
                            {/* For now is "hard-coded" */}
                            <span>Dark Mode</span>
                        </div>
                    </Col>
                </Row>
            </Wrapper>
        </Fragment>
    )
}

export default Header