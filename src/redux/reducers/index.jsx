import { combineReducers } from "redux";
import loginReducer from "./login";
import menu from "./menu";
import delete_menu from "./delete_menu";
import post_menu from "./post_menu";

const rootReducers = combineReducers({
  loginReducer,
  menu,
  delete_menu,
  post_menu,
});

export default rootReducers;
