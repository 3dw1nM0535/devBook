import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import user from "./user";
import file from "./file";

export default combineReducers({
  user,
  file,
  routing: routerReducer,
});
