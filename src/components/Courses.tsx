import React from 'react';
import { CourseCard } from './course/CourseCard';
import { featuredCourses } from '../data/courses';

function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Featured Courses</h1>
          <p className="mt-2 text-gray-600">Expand your skills with our top-rated courses</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;