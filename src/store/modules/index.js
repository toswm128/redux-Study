import { combineReducers } from "redux";
import auth from "./auth";
import counter from "./counter";
import todo from "./todo";

export default combineReducers({
  auth,
  counter,
  todo,
});
