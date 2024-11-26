import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Clock, BarChart, Award, Star, Users } from 'lucide-react';
import { featuredCourses } from '../data/courses';

function CourseDetail() {
  const { id } = useParams();
  const course = featuredCourses.find(c => c.id === parseInt(id || '1'));

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{course.title}</h1>
              <p className="text-gray-300 text-lg">{course.description}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5" />
                  <span className="ml-1">{course.students.toLocaleString()} students</span>
                </div>
              </div>
              <div>
                <p className="text-sm">Created by <span className="font-medium">{course.instructor}</span></p>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4" />
                  <span className="ml-1">{course.hours} hours</span>
                </div>
                {course.lectures && (
                  <div className="flex items-center">
                    <Play className="h-4 w-4" />
                    <span className="ml-1">{course.lectures} lectures</span>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="bg-white text-gray-900 rounded-lg p-6 w-full max-w-md">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <div className="text-3xl font-bold mb-6">${course.price}</div>
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  Enroll Now
                </button>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Full lifetime access</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Progress tracking</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course content */}
      {course.topics && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.topics.map((topic, index) => (
              <div key={index} className="flex items-start">
                <Play className="h-5 w-5 text-indigo-600 mt-0.5" />
                <span className="ml-2">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;