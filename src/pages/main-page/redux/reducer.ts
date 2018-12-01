import initialState from './initial-state'
import * as EVENT from './events'
import * as MainPageInterfaces from 'page.main-page/interfaces'

export default (state : MainPageInterfaces.MainPageReducerInterface = initialState, event) => {
    switch(event.type) {
        default:
            return state
    }

}