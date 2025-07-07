import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user, admin } = useSelector((state) => state.auth);

  if (adminOnly) {
    if (!admin?.isAuthenticated) {
      return <Navigate to="/admin/login" replace />;
    }
    return children;
  }

  if (!user?.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
