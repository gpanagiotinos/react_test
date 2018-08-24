import { createStore, combineReducers } from 'redux'
import { breakpoint, role } from './reducer'
// Combine Reducers
const reducers = combineReducers({
  breakpoint: breakpoint,
  role: role
})

const store = createStore(reducers)

export default store
