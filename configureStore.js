import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import reducer from "./reducer";
import {
  sagaFetchUser,
  sagaRegistration,
  sagaSMSCheck,
  sagaMakeQuery,
  sagaMoneyTransfer,
} from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(sagaFetchUser);
  sagaMiddleware.run(sagaRegistration);
  sagaMiddleware.run(sagaSMSCheck);
  sagaMiddleware.run(sagaMakeQuery);
  sagaMiddleware.run(sagaMoneyTransfer);
  let persistor = persistStore(store);
  return { store, persistor };
};
