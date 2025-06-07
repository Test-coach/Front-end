import React from "react";
import { PlayCircle } from "lucide-react";

const TestCard = ({ test }) => (
  <div className="bg-[#f8fafc] shadow-xl rounded-xl p-6 m-4 flex flex-col items-start border-2 border-blue-200 hover:scale-105 hover:shadow-blue-200 transition-transform duration-300 ease-in-out cursor-pointer min-h-[320px]">
    <div className="w-full flex items-center justify-between mb-2">
      <h3 className="text-xl font-bold text-blue-400 break-words whitespace-normal w-3/4">{test.title}</h3>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${test.difficulty === 'easy' ? 'bg-green-100 text-green-700' : test.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{test.difficulty}</span>
    </div>
    <p className="text-gray-600 mb-2 text-sm line-clamp-2">{test.description}</p>
    <div className="flex flex-wrap gap-2 mb-2">
      <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium flex items-center gap-1"><PlayCircle className="w-4 h-4" />Duration: {test.duration} min</span>
      {test.passage && <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-xs font-medium flex items-center gap-1"><PlayCircle className="w-4 h-4" />Lang: {test.passage.language}</span>}
    </div>
    {test.requirements && (
      <div className="flex flex-col gap-1 mb-2 w-full">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Min WPM:</span>
          <span className="text-gray-800">{test.requirements.minWPM}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Max Errors:</span>
          <span className="text-gray-800">{test.requirements.maxErrors}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Min Accuracy:</span>
          <span className="text-gray-800">{test.requirements.minAccuracy}%</span>
        </div>
      </div>
    )}
    <div className="mt-auto w-full flex justify-end">
      <button className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-4 py-2 rounded-lg shadow transition-colors duration-200">
        <PlayCircle className="w-5 h-5" /> START TEST
      </button>
    </div>
  </div>
);

export default TestCard;
