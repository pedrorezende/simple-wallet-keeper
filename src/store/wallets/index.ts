import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

// Define a type for the slice state
interface WalletState {
  version: number;
  data: [];
}

// Define the initial state using that type
const initialState: WalletState = {
  version: 1,
  data: [],
};

export const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<WalletState>) => {
      state.version = 1;
      state.data = [];
    },
  },
});

export const { create } = walletsSlice.actions;

export const selectUserWallets = (state: RootState) => state.wallets.data || [];
export default walletsSlice.reducer;
