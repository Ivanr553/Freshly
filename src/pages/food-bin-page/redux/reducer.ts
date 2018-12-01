import initialState from './intial-state'
import * as EVENT from './events'
import { MyFoodReducerInterface } from 'page.my-food-page/interfaces'

export default (state : MyFoodReducerInterface = initialState, event) => {
    switch(event.type) {
        default:
            return state
    }

}