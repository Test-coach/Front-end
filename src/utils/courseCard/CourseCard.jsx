import React from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../axiosInstance';
import { API_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
   const navigate = useNavigate();
  const stars = Math.round(course.rating?.average || 0);
  const admin = useSelector(state => state.auth.admin);

  const editCourse = (name) =>{
    const res = axiosInstance(`${API_URL}/admin/course/${name}`)
    console.log("res" , res.data);
    navigate('/admin/edit/course', { state: { course: res.data } });
  }

  return (
    <div className="group rounded-2xl p-5 bg-gradient-to-br from-white via-blue-50/30 to-slate-100/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.04] hover:-translate-y-1 transition-all duration-300 ease-out w-full max-w-[240px] border border-blue-200/60 backdrop-blur-sm text-sm relative overflow-hidden">
      {/* Subtle animated background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative flex flex-col gap-4 h-full">
        {/* Image and Title */}
        <div className="flex gap-3 items-start">
          <div className="relative">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-12 h-12 rounded-xl shadow-md object-cover ring-2 ring-blue-100/50 group-hover:ring-blue-300/60 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h2 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2 group-hover:text-blue-800 transition-colors duration-200">
            {course.title}
          </h2>
        </div>

        {/* Course Info */}
        <div className="text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">⏱</span>
            <span className="font-medium text-slate-700">Duration:</span>
            <span className="text-slate-800 font-semibold">{course.duration} hrs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">📈</span>
            <span className="font-medium text-slate-700">Enrollments:</span>
            <span className="text-slate-800 font-semibold">{course.enrollmentCount}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex justify-between items-center w-full mt-auto text-xs">
          {/* Rating Section - Left */}
          <div className=" items-center gap-2">
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-sm transition-transform duration-200 hover:scale-110">
                  {i < stars ? '★' : '☆'}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-[11px] font-medium">({course.rating?.count || 0})</p>
          </div>

          {/* Buttons Section - Right */}
          <div className="flex flex-row gap-2">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-4 py-2 text-xs font-medium hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => {/* handle view logic here */ }}
            >
              View
            </button>

            {admin.isAuthenticated && (
              <button
                className="bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg px-4 py-2 text-xs font-medium hover:from-slate-700 hover:to-slate-800 hover:shadow-lg hover:shadow-slate-500/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => editCourse(course.name)}
              >
                Edit
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;