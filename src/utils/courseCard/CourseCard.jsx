import React from 'react';

const CourseCard = ({ course }) => {
  const stars = Math.round(course.rating?.average || 0);

  return (
    <div className="rounded-2xl p-4 bg-gradient-to-br from-white via-slate-50 to-gray-100 shadow-xl hover:shadow-blue-500/40 hover:scale-[1.03] transition-all duration-300 w-full max-w-[220px] border border-blue-100 text-sm">
  <div className="flex flex-col gap-3 h-full">
    {/* Image and Title */}
    <div className="flex gap-3 items-start">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-10 h-10 rounded shadow-md object-cover"
      />
      <h2 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2">
        {course.title}
      </h2>
    </div>

    {/* Course Info */}
    <div className="text-xs text-slate-600 space-y-1">
      <p><span className="font-medium text-slate-700">⏱ Duration:</span> {course.duration} hrs</p>
      <p><span className="font-medium text-slate-700">📈 Enrollments:</span> {course.enrollmentCount}</p>
    </div>

    {/* Rating */}
    <div className="flex items-center text-yellow-500 text-xs">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < stars ? '★' : '☆'}</span>
      ))}
      <span className="ml-1 text-gray-500 text-[10px]">({course.rating?.count || 0})</span>
    </div>
  </div>
</div>
);
};

export default CourseCard;
