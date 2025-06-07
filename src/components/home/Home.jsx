import React from 'react';
import dummyCourses from '../../utils/dummData';
import CourseCard from '../../utils/courseCard/CourseCard';


const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {dummyCourses.map((item, index) => (
        <CourseCard key={index} course={item} />
      ))}
    </>
  );
};

export default Home;
