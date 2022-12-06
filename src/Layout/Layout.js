import React, { Fragment } from 'react'
// I've import my Routes
import Routers from '../routes/routers'
// I've import my Component
import Header from '../components/Header'


const Layout = () => {
    return (
        <Fragment>
            {/* Header Component */}
            <Header />
            {/* Routers */}
            <div>
                <Routers />
            </div>
        </Fragment>
    )
}

export default Layout