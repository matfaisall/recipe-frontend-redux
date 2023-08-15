import { legacy_createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
