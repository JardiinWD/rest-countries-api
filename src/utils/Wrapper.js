import React, { Fragment } from 'react'
import classes from './styles/Wrapper.module.css'
import { Container, Row } from 'reactstrap'

const Wrapper = (props) => {
    return (
        <Fragment>
            {/* classes.container */}
            <Container className={`${classes.container} ${props.className}`}>
                {props.children}
            </Container>
        </Fragment>
    )
}

export default Wrapper
