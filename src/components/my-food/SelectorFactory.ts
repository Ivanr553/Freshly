import { createSelector } from 'reselect'
import { AppStateInterface } from 'interfaces.main'
import { MyFoodReducerInterface } from 'component.my-food/interface'
import * as EventFactory from 'component.my-food/redux/event-factory'

const myFoodStateSelector = createSelector<AppStateInterface, any, any>(
    state => state.MyFoodReducer,
    state => state
)

const testSelector = createSelector<any, MyFoodReducerInterface, any>(
    myFoodStateSelector,
    state => state.testing
)

const selectors = [
    testSelector
]

export default dispatch => createSelector(selectors, (...args) => {

    const [
        testing
    ] = args

    return {
        testing,
        onClickHandler: () => dispatch(EventFactory.pageClicked())
    }
})