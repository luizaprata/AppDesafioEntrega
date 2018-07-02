import { DELIVERIES_ERROR } from '../actions/deliveries'

const initialState = {}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case DELIVERIES_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}