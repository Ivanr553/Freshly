import Reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'

const logger = store => next => action => {
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    return result
  }

export default createStore(
    Reducers,
    applyMiddleware(logger) 
)