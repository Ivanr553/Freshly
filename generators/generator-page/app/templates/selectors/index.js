import { createSelector } from 'reselect'
import { <%= component %>ReducerInterface } from '../interfaces'
import { AppStateInterface } from 'interfaces.main'

export const <%= component %>StateSelector = createSelector<AppStateInterface, any, any>(
    state => state.<%= component %>Reducer,
    state => state
)