import React from 'react'
import classes from './styles/Pagination.module.scss'


const Pagination = ({ cardsPerPage, totalCards, setCurrentPage, currentPage }) => {
    // I create an empty array, this is created for my pages
    let pages = []
    /* I use  */
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        // I pushed all array index
        pages.push(i)
    }

    return (
        /* classes.pagination_wrapper */
        <div className={classes.pagination_wrapper}>
            {
                pages.map((page, index) => {
                    return (
                        <button
                            onClick={() => setCurrentPage(page)}
                            key={index}
                            className={page === currentPage ? `${classes.active_page}` : ''}
                        >
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination
