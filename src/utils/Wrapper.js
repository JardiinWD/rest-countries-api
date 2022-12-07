import React, { Fragment } from 'react'
import classes from './styles/Wrapper.module.scss'
import { Container } from 'reactstrap'

const Wrapper = (props) => {
    return (
        <Fragment>
            {/* classes.container */}
            <Container fluid className={`${classes.container} ${props.className}`}>
                {props.children}
            </Container>
        </Fragment>
    )
}

export default Wrapper
