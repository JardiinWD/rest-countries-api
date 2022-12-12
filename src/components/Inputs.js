import React, { Fragment, useState, useRef, useCallback } from 'react'
// Reactstrap components
import { Col, Row } from 'reactstrap'
import Wrapper from '../utils/Wrapper'
import classes from './styles/Inputs.module.scss'
import { BsSearch } from 'react-icons/bs'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'


const Inputs = (props) => {

    // I've Took my region state from Homepage and my Handlers
    const { region, allCountries, setAllCountries, setSearchedCountry } = props

    // Toggling dropdown menu function (initially setted as false)
    const [isOpen, setIsOpen] = useState(false)
    // Selected option management
    const [selectedOption, setSelectedOption] = useState(null);
    // Input field where user can write his country 

    const allCountriesToFilter = [...allCountries]

    // Toggling handler function
    const togglingHandler = () => {
        // Use the not operator as a toggle
        setIsOpen(!isOpen)
    }

    /** Function for filteredRegions
     * 
     * @param {string} value Option Selected
     * @param {variable} variable // My variable to return
     */
    const regionsHandler = (value, variable) => {
        // I create a variable where I filter my main array
        variable = allCountriesToFilter.filter(item => {
            return item.region.includes(value)
        })
        // I will filter my setSearchedCountry with the variable
        setSearchedCountry(variable)
    }

    // Selected Option
    const optionClicked = value => () => {
        // Take the selected option value and update
        setSelectedOption(value);

        // I create a new variable for the filteredRegions
        let filteredRegion;
        // If users chose Oceania I invoke my regionsHandler fn
        if (
            value === 'Oceania' ||
            value === 'Africa' ||
            value === 'Europe' ||
            value === 'Americas' ||
            value === 'Asia'
        ) regionsHandler(value, filteredRegion)

        // Autoclose the dropdown menu
        setIsOpen(false)
    }

    // Set my search input field on searchedCountry
    const onSearchCountry = (e) => {
        const userInput = e.target.value.toLowerCase()
        // filtered by userInput 
        if (userInput) {
            const foundCountry = allCountriesToFilter.filter(item => {
                return item.name.common.toLowerCase().includes(userInput);
            })
            setSearchedCountry(foundCountry)
        }
        setAllCountries(allCountries)
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
