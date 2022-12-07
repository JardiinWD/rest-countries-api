import React, { Fragment } from 'react'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import Wrapper from '../utils/Wrapper'
import classes from './styles/Inputs.module.scss'
import { BsSearch } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'


const Inputs = (props) => {

    // I've Took my region state from Homepage
    const { region } = props

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
                    <Col className={classes.col} lg='2' xs='5'>
                        {/* dropdown_container */}
                        <div className={classes.dropdown_container}>
                            {/* dropdown_header */}
                            <div className={classes.dropdown_header}>
                                {/* Text */}
                                <span>Filter by Region</span>
                                {/* Icon */}
                                <RiArrowDropDownLine className={classes.dropdown_arrow} />
                            </div>
                            {/* dropdown_list */}
                            <ul className={classes.dropdown_list}>
                                {
                                    region.map((el, index) => {
                                        return (
                                            <li value={el} key={index} className={classes.list_item}>{el}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Wrapper>
        </Fragment>
    )
}

export default Inputs
