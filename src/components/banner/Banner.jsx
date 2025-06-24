import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="bg-[#f8fafc] py-16 px-6 md:px-16 rounded-2xl shadow-sm mt-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-700 leading-tight relative inline-block">
          Master Typing Skills for <br />
          <span className="text-blue-400 relative inline-block">
            Government Exams & Career
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-700 mt-5 text-sm md:text-base max-w-2xl mx-auto">
          Comprehensive typing courses designed for SSC Stenographer, Court Stenographer, and other government exam aspirants. Practice with real exam patterns and boost your career.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-100 text-blue-500 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-200 transition font-medium">
            Take Free Test <FaArrowRight />
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100 transition font-medium">
            Browse Courses
          </button>
        </div>

        {/* Trust Badge */}
        <p className="text-xs text-slate-500 mt-4">⭐ 4.9/5 rating by 12,000+ learners • No credit card required</p>
      </div>
    </section>
  );
};

export default Banner;
