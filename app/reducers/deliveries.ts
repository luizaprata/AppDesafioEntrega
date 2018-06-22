import { CHANGE_DRIVER, GET_INITIAL_DELIVERIES, DELIVERIES_ERROR, DELIVERIES_RESULT } from "../actions/deliveries";

const initialState = {};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case DELIVERIES_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
