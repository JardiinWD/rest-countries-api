import React, { Fragment, useContext } from 'react'
import { Col, Row } from 'reactstrap'
import classes from './styles/Header.module.scss'
import Wrapper from '../utils/Wrapper'
// Link component
import { Link } from 'react-router-dom'
// Icon
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
// GlobalContext
import { GlobalContext } from '../context/GlobalState'


const Header = () => {

    // I will invoke the Global Context
    const { mode, switchMode } = useContext(GlobalContext)

    return (
        /* Helmet */
        <Fragment>
            {/* Wrapper */}
            <Wrapper className={mode ? `${classes.header_light}` : `${classes.header_dark}`}>
                {/* Row */}
                <Row className={classes.row_header}>
                    {/* xs='12' lg='12' */}
                    <Col className="d-flex justify-content-between align-items-center" xs='12' lg='12'>
                        {/* Header Title */}
                        <Link className={classes.link} to='/home'>Where in the world?</Link>
                        {/* Darkmode toggle */}
                        <div onClick={switchMode} className={classes.toggle}>
                            {
                                mode ? (
                                    <>
                                        {/* mode_icon */}
                                        <span className={classes.mode_icon}>
                                            <BsMoonFill />
                                        </span>
                                        {/* Dark Mode */}
                                        <span>Dark Mode</span>
                                    </>
                                ) : (
                                    <>
                                        {/* mode_icon */}
                                        <span className={classes.mode_icon}>
                                            <BsSunFill />
                                        </span>
                                        {/* Light Mode */}
                                        <span>Light Mode</span>
                                    </>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Wrapper>
        </Fragment >
    )
}

export default Header