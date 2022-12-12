import React, { Fragment } from 'react'
// Classes
import classes from './styles/CountryCard.module.scss'
// Utils Format number for population
import { FormatNumber, FormatString } from '../../src/utils/Format'
// Link utils for Card rendering
import { Link } from 'react-router-dom'


const CountryCard = (props) => {
    // Destructuring of my Initial Data
    const { name, region, capital, population, flags } = props.data
    // I've created all my variables for every country
    const countryName = name.common
    const countryRegion = region
    const countryCapital = capital ?? 'Capital Not Found'
    const countryPopulation = population
    const countryFlag = flags.png

    return (
        <Fragment>
            {
                props.data && <Link className={classes.links_to} to={`/home/${countryName.trim()}`}>
                    {/* classes.card */}
                    <div className={classes.card}>
                        {/* classes.card_img */}
                        <img className={classes.card_img} src={countryFlag} alt={countryName} />
                        {/* classes.card_info */}
                        <ul className={classes.card_info}>
                            {/* classes.title */}
                            <li className={classes.title}>{countryName.length > 25 ? countryName.substring(0, 25) + '...' : countryName}</li>
                            {/* classes.card_item */}
                            <li className={classes.card_item}>
                                <span>Population: </span>
                                <span>{FormatNumber(countryPopulation)}</span>
                            </li>
                            {/* classes.card_item */}
                            <li className={classes.card_item}>
                                <span>Region: </span>
                                <span>{countryRegion}</span>
                            </li>
                            {/* classes.card_item */}
                            <li className={classes.card_item}>
                                <span>Capital: </span>
                                <span>{countryCapital[0]}</span>
                            </li>
                        </ul>
                    </div>
                </Link>
            }

        </Fragment>
    )
}

export default CountryCard
