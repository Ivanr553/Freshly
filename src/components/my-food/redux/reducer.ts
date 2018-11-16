import initialState from './intial-state'
import * as EVENT from './events'
import { initalStateInterface } from 'component.my-food/interface'

export default (state : initalStateInterface = initialState, event) => {
    switch(event.type) {
        case EVENT.PAGE_CLICKED:
            return pageClickedHanlder(state, event)
        default:
            return state
    }


    function pageClickedHanlder(state, event) {
        const newState = Object.create(state)
        newState.testing = !state.testing

        return newState
    }
}