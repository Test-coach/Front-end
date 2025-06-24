import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 px-10 py-10 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 text-blue-600 font-semibold text-lg mb-2">
            <FaTrophy className="text-xl" />
            <span>TypingTest Pro</span>
          </div>
          <p className="text-sm text-gray-600">
            Master typing skills for government exams and career growth with our expert-designed courses.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold mb-2">Courses</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Government Exams</a></li>
            <li><a href="#" className="hover:underline">General Typing</a></li>
            <li><a href="#" className="hover:underline">Speed Building</a></li>
            <li><a href="#" className="hover:underline">Accuracy Training</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Free Typing Test</a></li>
            <li><a href="#" className="hover:underline">Typing Tips</a></li>
            <li><a href="#" className="hover:underline">Exam Patterns</a></li>
            <li><a href="#" className="hover:underline">Success Stories</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
