import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

// Define a type for the slice state
interface KeyringState {
  version: number;
  data: [];
}

// Define the initial state using that type
const initialState: KeyringState = {
  version: 1,
  data: [],
};

export const keyringSlice = createSlice({
  name: "keyring",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<KeyringState>) => {
      state.version = 1;
      state.data = [];
    },
  },
});

export const { create } = keyringSlice.actions;

export const selectKeyring = (state: RootState) => state.keyring.data || [];
export default keyringSlice.reducer;
