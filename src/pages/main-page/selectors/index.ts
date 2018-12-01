import { createSelector } from 'reselect'
import { MainPageReducerInterface } from '../interfaces'
import { AppStateInterface } from 'interfaces.main'

export const MainPagStateSelector = createSelector<AppStateInterface, any, any>(
    state => state.MainPageReducer,
    state => state
)

export const currentPage = createSelector<any, MainPageReducerInterface, any>(
    MainPagStateSelector,
    state => state.currentPage
)