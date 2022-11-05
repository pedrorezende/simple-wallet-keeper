import { combineReducers, configureStore } from "@reduxjs/toolkit";
import keyringReducer from "./keyring";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "keyring-app",
  storage,
  version: 1,
  whitelist: ["keyring"],
};

const rootReducer = combineReducers({
  keyring: keyringReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
