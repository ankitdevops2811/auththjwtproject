import { SIGNIN_ACTION_TYPES } from "./signin.type";

export const setToken = (token) => {
  return {
    type: SIGNIN_ACTION_TYPES.SET_TOKEN,
    payload: token,
  };
};

export const setEmployee = (employee) => {
  return {
    type: SIGNIN_ACTION_TYPES.SET_EMPLOYEE,
    payload: employee,
  };
};

export const setAdmin = (admin) => {
  return {
    type: SIGNIN_ACTION_TYPES.SET_ADMIN,
    payload: admin,
  };
};
