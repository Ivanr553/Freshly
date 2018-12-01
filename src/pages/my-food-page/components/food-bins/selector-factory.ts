import { createSelector } from 'reselect'
import * as Selector from 'page.my-food-page/selectors'

const selectors = [
    Selector.bins
]

export default dispatch => createSelector(selectors, (...args) => {

    const [
        bins
    ] = args

    return {
        bins
    }
})