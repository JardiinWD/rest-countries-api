import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../utils/Helmet'
import Wrapper from '../utils/Wrapper'
import { Row, Col } from 'reactstrap'
import './styles/ErrorPage.scss'



const ErrorPage = () => {
    return (
        /* Helmet */
        <Helmet className="helmet" title='Page not found'>
            {/* Wrapper */}
            <Wrapper className="page_not_found">
                {/* Row */}
                <Row className="row_not_found">
                    {/* Col lg=12 */}
                    <Col lg='12'>
                        {/* .not_found */}
                        <div className="notfound">
                            {/* not_found-404 */}
                            <div className="notfound-404">
                                <h1>404</h1>
                            </div>
                            {/* Title */}
                            <h2>Oops, The Page you are looking for can't be found!</h2>
                            {/* Redirect */}
                            <Link to='/'>
                                Home
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Wrapper>
        </Helmet>
    )
}

export default ErrorPage