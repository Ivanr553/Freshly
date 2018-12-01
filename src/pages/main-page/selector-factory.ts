import { createSelector } from 'reselect'
import * as Selectors from './selectors'

const selectors = [
    Selectors.currentPage
]

export default dispatch => createSelector(selectors, (...args) => {

    const [
        CurrentPage
    ] = args

    return {
        CurrentPage
    }
})