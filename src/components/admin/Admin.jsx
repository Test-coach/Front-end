import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAdmin, logoutUser } from '../../redux/authSlice';
import CourseCard from '../../utils/courseCard/CourseCard';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    dispatch(logoutUser());
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
    navigate('/admin/login');
  };

  const handleCreateCourse = () => {
    navigate('/admin/create/course');
  };

  const handleAllCourse = () =>{
    navigate('/admin/course');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={handleCreateCourse}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Course
        </button>
          <button
          onClick={handleAllCourse}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Course
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
        {/* <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {dummyCourses.map((item, index) => (
            <CourseCard key={index} course={item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Admin;
