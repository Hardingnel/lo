import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-w-16 aspect-h-9 relative">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-48"
          />
          <div className="absolute top-4 right-4 bg-indigo-600 text-white px-2 py-1 rounded text-sm font-medium">
            {course.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{course.instructor}</p>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4" />
              <span className="ml-1">{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span className="ml-1">{course.hours}h</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${course.price}
            </span>
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}