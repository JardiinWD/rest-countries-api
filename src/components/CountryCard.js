import React from 'react'
// Classes
import classes from './styles/CountryCard.module.scss'



const CountryCard = (props) => {
    // Destructuring of my Initial Data
    const { name, region, capital, population, flags } = props.data
    // I've created all my variables for every country
    const countryName = name.common
    const countryRegion = region
    const countryCapital = capital[0]
    const countryPopulation = population
    const countryFlag = flags.png


    return (
        /* classes.card */
        <div className={classes.card}>
            {/* classes.card_img */}
            <img className={classes.card_img} src={countryFlag} alt={countryName} />
            {/* classes.card_info */}
            <ul className={classes.card_info}>
                {/* classes.title */}
                <li className={classes.title}>{countryName}</li>
                {/* classes.card_item */}
                <li className={classes.card_item}>
                    <span>Population: </span>
                    <span>{countryPopulation}</span>
                </li>
                {/* classes.card_item */}
                <li className={classes.card_item}>
                    <span>Region: </span>
                    <span>{countryRegion}</span>
                </li>
                {/* classes.card_item */}
                <li className={classes.card_item}>
                    <span>Capital: </span>
                    <span>{countryCapital}</span>
                </li>
            </ul>
        </div>
    )
}

export default CountryCard
