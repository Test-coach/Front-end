import { useSelector } from 'react-redux';

const PublicRoutes = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token) || localStorage.getItem('token');

  if (isAuthenticated || token) {
    return( <Route path="/" element={<Home />} />)
  }

  return children;
};

export default PublicRoutes;
