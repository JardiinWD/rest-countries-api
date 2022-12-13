import React, { Fragment, useContext } from 'react'
import { Col, Row } from 'reactstrap'
import classes from './styles/Header.module.scss'
import Wrapper from '../utils/Wrapper'
// Link component
import { Link } from 'react-router-dom'
// Icon
import { BsMoonFill } from 'react-icons/bs'
// GlobalContext
import { GlobalContext } from '../context/GlobalState'


const Header = () => {

    // I will invoke the Global Context
    const { mode, switchMode } = useContext(GlobalContext)
    console.log(`Sono state globale dentro a Header ${mode}`);

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
                        <div onClick={switchMode} className={`${classes.toggle}`}>
                            {/* Icon */}
                            <span className={classes.mode_icon}>
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