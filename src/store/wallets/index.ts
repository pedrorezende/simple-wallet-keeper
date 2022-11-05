import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

// Define a type for the slice state
interface WalletState {
  version: number;
}

// Define the initial state using that type
const initialState: WalletState = {
  version: 1,
};

export const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<number>) => {
      state.version = 1;
    },
  },
});

export const { create } = walletsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectWallet = (state: RootState) => state.wallets.value;

export default walletsSlice.reducer;
