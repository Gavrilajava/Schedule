import { combineReducers } from 'redux'
import UserReducer from './userReducer'
import MessageReducer from './messageReducer'
import NewItemReducer from './newItemReducer'

const appReducer = combineReducers({ UserReducer, MessageReducer, NewItemReducer})

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset whole redux state
  if (action.type === 'logout') {
    localStorage.clear()
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
