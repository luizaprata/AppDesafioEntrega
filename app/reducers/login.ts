import {
    LOGIN_ERROR,
    LOGIN_RESULT,
  } from '../actions/login'
  
  const initialState = {}
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case LOGIN_ERROR:
        return { ...state, error: action.error }
      default:
        return state
    }
  }
  