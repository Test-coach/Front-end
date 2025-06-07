import React from 'react';
import dummyCourses from '../../utils/dummData';
import CourseCard from '../../utils/courseCard/CourseCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">All Courses</h1>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        {dummyCourses.map((item, index) => (
          <CourseCard key={index} course={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
