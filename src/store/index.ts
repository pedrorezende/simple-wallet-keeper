import { configureStore } from "@reduxjs/toolkit";
import walletsReducer from "./wallets";

export const store = configureStore({
  reducer: {
    wallets: walletsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
