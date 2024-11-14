import { IAuthState } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
  },
});

export const { LOGIN_SUCCESS, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
