import React from 'react';
import { BookOpen, Clock, Award, BarChart2 } from 'lucide-react';
import { StatCard } from './common/StatCard';
import { EnrolledCourseCard } from './course/EnrolledCourseCard';
import { enrolledCourses } from '../data/courses';
import type { StatCard as StatCardType } from '../types';

function Dashboard() {
  const stats: StatCardType[] = [
    { icon: BookOpen, label: 'Courses', value: enrolledCourses.length },
    { icon: Clock, label: 'Hours Learned', value: 24 },
    { icon: Award, label: 'Certificates', value: 1 },
    { icon: BarChart2, label: 'Avg. Progress', value: '48%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Enrolled Courses */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
        <div className="grid grid-cols-1 gap-6">
          {enrolledCourses.map((course) => (
            <EnrolledCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;