import initialState from './intial-state'
import * as EVENT from './events'
import * as <%= component %>Interfaces from 'page.<%= name %>/interfaces'

export default (state : <%= component %>Interfaces.<%= component %>ReducerInterface = initialState, event) => {
    switch(event.type) {
        default:
            return state
    }

}