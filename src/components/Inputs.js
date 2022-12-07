import React, { Fragment } from 'react'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import Wrapper from '../utils/Wrapper'
import classes from './styles/Inputs.module.scss'
import { BsSearch } from 'react-icons/bs'


const Inputs = () => {
    return (
        /* Fragment */
        <Fragment>
            {/* Wrapper Component */}
            <Wrapper className="" >
                {/* classes.row */}
                <Row className={classes.row}>
                    {/* Search Input */}
                    <Col className={`${classes.col} ${classes.search_col}`} lg='4' xs='12'>
                        {/* search_button */}
                        <button className={classes.search_button}>
                            {/* search_icon */}
                            <BsSearch className={classes.search_icon} />
                        </button>
                        {/* Input */}
                        <div className={classes.search_input}>
                            {/* Input field */}
                            <input type="text" placeholder='Search for a country...' />
                        </div>
                    </Col>
                    {/* Dropdown Menu */}
                    <Col className={classes.col} lg='2'>B</Col>
                </Row>
            </Wrapper>
        </Fragment>
    )
}

export default Inputs
