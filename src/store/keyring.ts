import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { WalletService } from "services/WalletService";

// Define a type for the slice state
interface KeyringState {
  version: number;
  initialWalletAddress?: string;
  wallets?: {
    [publicKey: string]: string;
  };
}

type CreateWalletParams = {
  password: string;
  initialWallet: boolean;
};

// Define the initial state using that type
const initialState: KeyringState = {
  version: 1,
};

export const createWallet = createAsyncThunk(
  "keyring/createWallet",
  async ({ password, initialWallet = false }: CreateWalletParams) => {
    return {
      wallet: await WalletService.create(password),
      initialWallet,
    };
  }
);

export const keyringSlice = createSlice({
  name: "keyring",
  initialState,
  reducers: {
    removeWallet: (state, action: PayloadAction<string>) => {
      if (state.wallets) {
        delete state.wallets[action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createWallet.fulfilled, (state, action) => {
      const [address, encryptedWallet] = action.payload.wallet;
      if (!state.wallets) {
        state.wallets = {};
      }

      if (action.payload.initialWallet) {
        state.initialWalletAddress = address;
      }

      state.wallets[address] = encryptedWallet;
    });
  },
});

export const selectKeyringWallets = (state: RootState) => state.keyring.wallets;
export const selectInitialWalletAddress = (state: RootState) =>
  state.keyring.initialWalletAddress;

export const { removeWallet } = keyringSlice.actions;
export default keyringSlice.reducer;
