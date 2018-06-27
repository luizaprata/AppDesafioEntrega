import { combineReducers } from 'redux'
import deliveries from './deliveries'
import login from './login'

export default combineReducers({ deliveries, login })
