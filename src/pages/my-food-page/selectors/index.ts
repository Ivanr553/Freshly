import { createSelector } from 'reselect'
import { MyFoodReducerInterface } from '../interfaces'
import { AppStateInterface } from 'interfaces.main'

export const myFoodStateSelector = createSelector<AppStateInterface, any, any>(
    state => state.MyFoodReducer,
    state => state
)

export const bins = createSelector<any, MyFoodReducerInterface, any>(
    myFoodStateSelector,
    state => state.bins
)