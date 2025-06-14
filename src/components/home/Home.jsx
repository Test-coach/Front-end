import React from 'react';
import {dummyCourses , dummyTypingTests} from '../../utils/dummData';
import CourseCard from '../../utils/courseCard/CourseCard';
import TestCard from '../../utils/testCard/TestCard';

const Home = () => {
  return (
    <>
    <div className=" bg-gray-100 px-6 py-10">
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
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Typing Tests</h1>
      <div
        className="grid gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "stretch"
        }}
      >
        {dummyTypingTests.map((item, index) => (
          <TestCard key={index} test={item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
