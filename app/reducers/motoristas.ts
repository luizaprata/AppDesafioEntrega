import { CHANGE_MOTORISTA, FIRST_LOAD_MOTORISTAS } from "../actions/motoristas";

const initialState = {};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case CHANGE_MOTORISTA:
      return { ...state };
    case FIRST_LOAD_MOTORISTAS:
      return { ...state };
    default:
      return state;
  }
};
