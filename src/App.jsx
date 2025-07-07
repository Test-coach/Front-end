import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, loginAdmin } from './redux/authSlice'; 

import AppRouter from './router/AppRouter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Restore user auth
    const userToken = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (userToken && username) {
      dispatch(loginUser({ token: userToken, username }));
    }

    // Restore admin auth
    const adminToken = localStorage.getItem('admin_token');
    const adminUsername = localStorage.getItem('admin_username');
    if (adminToken && adminUsername) {
      dispatch(loginAdmin({ token: adminToken, username: adminUsername }));
    }
  }, [dispatch]);

  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
