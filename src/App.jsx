import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userSlice';

import Home from './components/home/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Admin from './components/admin/Admin';
import About from './components/screen/About';
import Payment from './components/payment/Payment';
// import About from './components/About';
// import UserInfo from './components/UserInfo';

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
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
             <Route path="/payment" element={<Payment />} />
        {/* <Route 
          path="/user" 
          element={
            <UserInfo 
              user={user} 
              handleSetUser={handleSetUser} 
              handleClearUser={handleClearUser} 
            />
          } 
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
