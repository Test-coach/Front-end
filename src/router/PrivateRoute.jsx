import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user, admin } = useSelector((state) => state.auth);

  if (adminOnly) {
    const isAdminAuthenticated =
      admin?.isAuthenticated || localStorage.getItem('admin_token');
    if (!isAdminAuthenticated) {
      return <Navigate to="/admin/login" replace />;
    }
    return children;
  } else {
    const isUserAuthenticated =
      user?.isAuthenticated || localStorage.getItem('token');
    if (!isUserAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }
};

export default PrivateRoute;
