import React from 'react'
import { Container } from 'reactstrap'


/** This component Allows me to wrap my components and it gives a name to every document
 * 
 * @param {string} props The page name
 * @returns 
 */
const Helmet = (props) => {
    // Pages Name
    document.title = 'Countries API - ' + props.title

    return (
        <Container fluid className={props.className}>
            {props.children}
        </Container>
    )
}

export default Helmet
