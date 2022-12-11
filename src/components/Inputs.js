import React, { Fragment, useState, useRef, useCallback } from 'react'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import Wrapper from '../utils/Wrapper'
import classes from './styles/Inputs.module.scss'
import { BsSearch } from 'react-icons/bs'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'


const Inputs = (props) => {

    // I've Took my region state from Homepage and my Handlers
    const { region, allCountries, setAllCountries } = props

    // Toggling dropdown menu function (initially setted as false)
    const [isOpen, setIsOpen] = useState(false)
    // Selected option management
    const [selectedOption, setSelectedOption] = useState(null);
    // Input field where user can write his country 
    const [searchedCountry, setSearchedCountry] = useState('')


    // Toggling handler function
    const togglingHandler = () => {
        // Use the not operator as a toggle
        setIsOpen(!isOpen)
    }
    // Selected Option
    const optionClicked = value => () => {
        // Take the selected option value and update
        setSelectedOption(value);
        // Autoclose the dropdown menu
        setIsOpen(false)
    }

    // Set my search input field on searchedCountry
    const onSearchCountry = (e) => {
        // Preventing Default
        e.preventDefault()
        if (e.target.value) {
            // Then I filter my results, based on what the user searched for
            const findResult = allCountries.filter(item => {
                // I will return the single item that was equal to input field
                return item.name.common.toLowerCase().includes(e.target.value.toLowerCase());
            })
            // If I find something then I will update my current state with the result
            // Else I will setAllCountries with allCountries
            findResult && findResult.length > 0 ? setAllCountries(findResult) : setAllCountries(allCountries)
        }
    }


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
                        <form onSubmit={onSearchCountry} className={classes.search_input}>
                            {/* Input field */}
                            <input
                                onChange={onSearchCountry}
                                type="text"
                                placeholder='Search for a country...'
                            />
                        </form>
                    </Col>
                    {/* Dropdown Menu */}
                    <Col className={classes.col} lg='2' xs='5'>
                        {/* dropdown_container */}
                        <div className={classes.dropdown_container}>
                            {/* dropdown_header */}
                            <div onClick={togglingHandler} className={classes.dropdown_header}>
                                {/* Text */}
                                <span>Filter by Region</span>
                                {/* Icon conditions */}
                                {
                                    isOpen ? (
                                        <RiArrowDropUpLine className={classes.dropdown_arrow} />
                                    ) : (
                                        <RiArrowDropDownLine className={classes.dropdown_arrow} />
                                    )
                                }
                            </div>
                            {/* dropdown_list */}
                            {
                                isOpen &&
                                <ul className={classes.dropdown_list}>
                                    {
                                        region.map((el, index) => {
                                            return (
                                                <li
                                                    value={el}
                                                    onClick={optionClicked(el)}
                                                    key={index}
                                                    className={classes.list_item}>
                                                    {el}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </div>
                    </Col>
                </Row>
            </Wrapper>
        </Fragment>
    )
}

export default Inputs
