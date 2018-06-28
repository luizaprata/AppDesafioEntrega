import { LOGIN_ERROR } from '../actions/login'

const initialState = {}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
