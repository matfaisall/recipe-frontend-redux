import { legacy_createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import promiseMiddleware from "redux-promise-middleware";

// import { persistStore, persistReducer } from "redux-persist";

// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = applyMiddleware(logger, promiseMiddleware);
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

// const persistor = persistStore(store);

// export { store, persistor };

export default store;
