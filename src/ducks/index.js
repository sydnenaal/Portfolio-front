import { combineReducers } from "redux";

import { contactReducer } from "./reducers";

export const rootReducer = combineReducers({
  contact: contactReducer,
});

export * from "./reducers";
