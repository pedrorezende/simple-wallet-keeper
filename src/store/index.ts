import { combineReducers, configureStore } from "@reduxjs/toolkit";
import walletsReducer from "./wallets";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "wallet-app",
  storage,
  version: 1,
  whitelist: ["wallets"],
};

const rootReducer = combineReducers({
  wallets: walletsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
