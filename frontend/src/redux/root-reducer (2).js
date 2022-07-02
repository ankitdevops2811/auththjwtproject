import { combineReducers } from "redux";

import { signinReducer } from "./signin/signin.reducer";

export const rootReducer = combineReducers({
  signin: signinReducer,
});
