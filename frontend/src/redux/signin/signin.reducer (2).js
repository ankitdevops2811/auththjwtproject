import { SIGNIN_ACTION_TYPES } from "./signin.type";

const INITIAL_STATE = {
  token: "",
  employee: {},
  admin: {},
};

export const signinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_ACTION_TYPES.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SIGNIN_ACTION_TYPES.SET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };
    case SIGNIN_ACTION_TYPES.SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};
