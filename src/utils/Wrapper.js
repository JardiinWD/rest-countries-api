import React, { Fragment } from 'react'
import classes from './styles/Wrapper.module.css'
import { Container, Row } from 'reactstrap'

const Wrapper = (props) => {
    return (
        <Fragment>
            {/* classes.container */}
            <Container className={`${classes.container} ${props.className}`}>
                {/* classes.row */}
                <Row className={classes.row}>
                    {props.children}
                </Row>
            </Container>
        </Fragment>
    )
}

export default Wrapper
