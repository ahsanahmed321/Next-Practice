import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "../reducers/errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
