import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import menu from "./menu";
import delete_menu from "./delete_menu";
import post_menu from "./post_menu";
import detail_menuReducer from "./detail_menu";

const rootReducers = combineReducers({
  loginReducer,
  registerReducer,
  menu,
  delete_menu,
  post_menu,
  detail_menuReducer,
});

export default rootReducers;
