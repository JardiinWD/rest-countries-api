import React from 'react'

/** This component Allows me to wrap my components and it gives a name to every document
 * 
 * @param {string} props The page name
 * @returns 
 */
const Helmet = (props) => {
    // Pages Name
    document.title = 'Countries API - ' + props.title
    return (
        <div style={{ width: '100%' }}>
            {props.children}
        </div>
    )
}

export default Helmet
