import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loginUser, loginAdmin } from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Rehydrate User Auth
const userToken = localStorage.getItem('token');
const userUsername = localStorage.getItem('username');
if (userToken && userUsername) {
  store.dispatch(loginUser({ token: userToken, username: userUsername }));
}

// Rehydrate Admin Auth
const adminToken = localStorage.getItem('admin_token');
const adminUsername = localStorage.getItem('admin_username');
if (adminToken && adminUsername) {
  store.dispatch(loginAdmin({ token: adminToken, username: adminUsername }));
}

export default store;
