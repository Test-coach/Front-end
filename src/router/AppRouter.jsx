// src/router/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/home/Home';
import Login from '../components/authentication/Login';
import Register from '../components/authentication/Register';
import Admin from '../components/admin/Admin';
import About from '../components/screen/About';
import Payment from '../components/payment/Payment';
import PrivateRoute from './PrivateRoute';
import FreeTest from '../components/screen/FreeTest';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/free/test" element={<FreeTest/>}/>

      {/* Protected Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
