import React from 'react';
import { Play, FileText, HelpCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { courseApi } from '../../lib/api';

interface CourseModuleProps {
  courseId: number;
  moduleId: number;
}

export function CourseModule({ courseId, moduleId }: CourseModuleProps) {
  const { data: module, isLoading } = useQuery({
    queryKey: ['module', moduleId],
    queryFn: () => courseApi.getModules(courseId),
  });

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4">{module?.title}</h3>
      <div className="space-y-4">
        {module?.lessons.map((lesson: any) => (
          <div key={lesson.id} className="flex items-start p-4 border rounded-lg hover:bg-gray-50">
            {lesson.type === 'video' && <Play className="h-5 w-5 text-indigo-600 mt-1" />}
            {lesson.type === 'text' && <FileText className="h-5 w-5 text-indigo-600 mt-1" />}
            {lesson.type === 'quiz' && <HelpCircle className="h-5 w-5 text-indigo-600 mt-1" />}
            <div className="ml-4">
              <h4 className="font-medium">{lesson.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
              {lesson.duration && (
                <span className="text-xs text-gray-500 mt-2 block">
                  Duration: {lesson.duration} minutes
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}