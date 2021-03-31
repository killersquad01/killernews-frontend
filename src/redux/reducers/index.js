import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
//
 const reducers = combineReducers({
  customer: AuthReducer,
 });

export default reducers;
