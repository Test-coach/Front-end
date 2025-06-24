import React from 'react';
import { FaHome, FaBookOpen, FaTrophy, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-[#f8fafc] border-b border-blue-100">
      {/* Logo */}
      <div className="flex items-center text-slate-700 font-semibold text-lg space-x-2">
        <FaTrophy className="text-xl" />
        <span>TypingTest Pro</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6 text-sm text-slate-700">
        <a href="#" className="flex items-center space-x-1 hover:text-blue-400">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-blue-400">
          <FaBookOpen />
          <span>Browse Courses</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-blue-400">
          <FaTrophy />
          <span>Free Typing Test</span>
        </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-blue-600 text-sm flex items-center space-x-1 hover:underline">
          <FaSignInAlt />
          <span>Login</span>
        </a>
        <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm px-4 py-2 rounded-lg flex items-center space-x-2">
          <FaUserPlus />
          <span>Sign Up</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
