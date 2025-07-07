import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/authentication/Login';
import Register from '../components/authentication/Register';
import About from '../components/screen/About';
import Payment from '../components/payment/Payment';
import PrivateRoute from './PrivateRoute';
import FreeTest from '../components/screen/FreeTest';
import PublicRoutes from './PublicRoutes';
import AdminLogin from '../components/admin/adminAuth/AdminLogin';
import AdminRegister from '../components/admin/adminAuth/AdminRegister';
import CreateCourse from '../components/admin/CreateCourse';
import Admin from '../components/admin/Admin';
import UserDashBoard from '../components/user/UserDashBoard';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
      <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
      <Route path="/admin/login" element={<PublicRoutes><AdminLogin /></PublicRoutes>} />
      <Route path="/admin/register" element={<PublicRoutes><AdminRegister /></PublicRoutes>} />
      <Route path="/about" element={<About />} />
      <Route path="/free/test" element={<FreeTest />} />

      {/* Protected User Routes */}
      <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
      <Route path="/home" element={<PrivateRoute><UserDashBoard /></PrivateRoute>} />

      {/* Protected Admin Routes */}
      <Route path="/admin" element={<PrivateRoute adminOnly><Admin /></PrivateRoute>} />
      <Route path="/admin/create/course" element={<PrivateRoute adminOnly><CreateCourse /></PrivateRoute>} />
    </Routes>
  );
};

export default AppRouter;
