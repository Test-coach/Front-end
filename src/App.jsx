// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userSlice';

import AppRouter from './router/AppRouter';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleSetUser = () => {
    dispatch(setUser({ name: 'John', age: 30 }));
  };

  const handleClearUser = () => {
    dispatch(setUser({}));
  };

  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
