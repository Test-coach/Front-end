import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    isAuthenticated: false,
    token: null,
    username: null,
  },
  admin: {
    isAuthenticated: false,
    token: null,
    username: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user.isAuthenticated = true;
      state.user.token = action.payload.token;
      state.user.username = action.payload.username;
    },
    logoutUser(state) {
      state.user.isAuthenticated = false;
      state.user.token = null;
      state.user.username = null;
    },
    loginAdmin(state, action) {
      state.admin.isAuthenticated = true;
      state.admin.token = action.payload.token;
      state.admin.username = action.payload.username;
    },
    logoutAdmin(state) {
      state.admin.isAuthenticated = false;
      state.admin.token = null;
      state.admin.username = null;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  loginAdmin,
  logoutAdmin,
} = authSlice.actions;

export default authSlice.reducer;
