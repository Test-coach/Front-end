import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div>
        <br/>
      <h2>{course.title}</h2>
      <img src={course.thumbnail} alt={course.title} width="200" />
      {/* <p>{course.description}</p> */}
      <p>Duration: {course.duration} hours</p>
      <p>Enrollments: {course.enrollmentCount}</p>
       <br/>
    </div>

  );
};

export default CourseCard;
