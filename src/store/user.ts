import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

// Define a type for the slice state
interface UserState {
  hashedPassword: string;
}

// Define the initial state using that type
const initialState: UserState = {
  hashedPassword: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeHashedPassword: (state, action: PayloadAction<string>) => {
      state.hashedPassword = action.payload;
    },
  },
});

export const selectPasswordHash = (state: RootState) =>
  state.user.hashedPassword;

export const { storeHashedPassword } = userSlice.actions;
export default userSlice.reducer;
