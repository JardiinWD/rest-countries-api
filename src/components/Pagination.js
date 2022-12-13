import React from 'react'
import classes from './styles/Pagination.module.scss'


const Pagination = ({ cardsPerPage, totalCards, setCurrentPage, currentPage, filteredCards }) => {

    // I create an empty array, this is created for my pages
    let pagesForAll = []
    /* I use  */
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        // I pushed all array index
        pagesForAll.push(i)
    }

    // I create an empty array, this is created for my filteredPages (by regions or search inputs)
    let pagesForFilter = []
    for (let i = 1; i <= Math.ceil(filteredCards / cardsPerPage); i++) {
        // I pushed all array index
        pagesForFilter.push(i)
    }

    return (
        /* classes.pagination_wrapper */
        <div className={classes.pagination_wrapper}>
            {
                /* If users didn't filter data for regions or inputs? */
                !filteredCards ? pagesForAll.map((page, index) => {
                    return (
                        <button
                            onClick={() => setCurrentPage(page)}
                            key={index}
                            className={page === currentPage ? `${classes.active_page}` : ''}
                        >
                            {page}
                        </button>
                    )
                }) : pagesForFilter.map((page, index) => {
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
