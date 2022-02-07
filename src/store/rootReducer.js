import { combineReducers } from "redux";
import { usersReducer } from "./reducers/usersReducer";

export const reducer = combineReducers({
  usersReducer,
});
