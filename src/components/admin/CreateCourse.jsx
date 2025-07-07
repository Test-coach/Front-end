import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { Plus, X, BookOpen, DollarSign, Calendar, Globe, FileText, Image, Clock } from 'lucide-react';


const CreateCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    examType: 'OTHER',
    description: '',
    price: '',
    discountPrice: '',
    language: 'en',
    validityMonths: '',
    thumbnailUrl: '',
    coverImageUrl: '',
    tests: [
      { name: '', duration: '' },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTestChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTests = [...formData.tests];
    updatedTests[index][name] = value;
    setFormData(prev => ({
      ...prev,
      tests: updatedTests
    }));
  };

  const addTest = () => {
    setFormData(prev => ({
      ...prev,
      tests: [...prev.tests, { name: '', duration: '' }]
    }));
  };

  const removeTest = (index) => {
    if (formData.tests.length > 1) {
      const updatedTests = formData.tests.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        tests: updatedTests
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: Number(formData.price),
        discountPrice: Number(formData.discountPrice),
        validityMonths: Number(formData.validityMonths),
        tests: formData.tests.map(test => ({
          ...test,
          duration: Number(test.duration)
        })),
      };
      console.log("payload",  payload)

      const res = await axiosInstance.post('/admin/exams', payload);
      console.log('Exam created:', res.data);
      alert('Exam created successfully');
    } catch (error) {
      console.error('Error creating exam:', error.response?.data || error.message);
      alert('Failed to create exam');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Course</h1>
            <p className="text-gray-600">Fill in the details to create a comprehensive exam package</p>
          </div>

          <div onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-4 mr-2 text-blue-500" />
                  Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter exam name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Globe className="w-4 h-4 mr-2 text-blue-500" />
                  Slug *
                </label>
                <input
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="exam-slug"
                />
              </div>
            </div>

            {/* Exam Type and Language */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                  Exam Type
                </label>
                <input
                  name="examType"
                  value={formData.examType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="e.g., Practice Test, Mock Exam"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Globe className="w-4 h-4 mr-2 text-blue-500" />
                  Language
                </label>
                <input
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="e.g., English, Spanish"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FileText className="w-4 h-4 mr-2 text-blue-500" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                placeholder="Describe the exam content, objectives, and what students will learn..."
              />
            </div>

            {/* Pricing and Validity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                  Price
                </label>
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <DollarSign className="w-4 h-4 mr-2 text-red-500" />
                  Discount Price
                </label>
                <input
                  name="discountPrice"
                  type="number"
                  value={formData.discountPrice}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  Validity (Months)
                </label>
                <input
                  name="validityMonths"
                  type="number"
                  value={formData.validityMonths}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="12"
                />
              </div>
            </div>

            {/* Image URLs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Image className="w-4 h-4 mr-2 text-purple-500" />
                  Thumbnail URL
                </label>
                <input
                  name="thumbnailUrl"
                  value={formData.thumbnailUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="https://example.com/thumbnail.jpg"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Image className="w-4 h-4 mr-2 text-purple-500" />
                  Cover Image URL
                </label>
                <input
                  name="coverImageUrl"
                  value={formData.coverImageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="https://example.com/cover.jpg"
                />
              </div>
            </div>

            {/* Tests Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Clock className="w-4 h-4 mr-2 text-orange-500" />
                  Tests
                </label>
                <button
                  type="button"
                  onClick={addTest}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Test
                </button>
              </div>

              <div className="space-y-4">
                {formData.tests.map((test, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-gray-700">Test {index + 1}</h4>
                      {formData.tests.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeTest(index)}
                          className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600">Test Name *</label>
                        <input
                          placeholder="Test Name"
                          name="name"
                          value={test.name}
                          onChange={(e) => handleTestChange(index, e)}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600">Duration (minutes) *</label>
                        <input
                          placeholder="Duration (minutes)"
                          name="duration"
                          type="number"
                          value={test.duration}
                          onChange={(e) => handleTestChange(index, e)}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-lg font-medium text-lg hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Create Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
