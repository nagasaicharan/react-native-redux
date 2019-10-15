// Redux store to intiate redux state

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger"; // output logging when global store is changed
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const persistConfig = {
  key: "root",
  blacklist: ["payment"],
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger, thunk];
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default store;
