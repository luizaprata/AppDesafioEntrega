import { CHANGE_DRIVER, GET_INITIAL_DELIVERIES } from "../actions/drivers";

const initialState = {};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case CHANGE_DRIVER:
      return { ...state };
    case GET_INITIAL_DELIVERIES:
      return { ...state };
    default:
      return state;
  }
};
