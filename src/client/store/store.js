import { createStore, combineReducers } from 'redux'
import { breakpoint } from './reducer'
// Combine Reducers
const reducers = combineReducers({
  breakpoint: breakpoint
})

const store = createStore(reducers)

export default store
