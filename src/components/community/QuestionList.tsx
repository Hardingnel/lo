import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import { communityApi } from '../../lib/api';

interface QuestionListProps {
  courseId: number;
}

export function QuestionList({ courseId }: QuestionListProps) {
  const { data: questions, isLoading } = useQuery({
    queryKey: ['questions', courseId],
    queryFn: () => communityApi.getQuestions(courseId),
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
    <div className="space-y-6">
      {questions?.map((question: any) => (
        <div key={question.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">{question.title}</h3>
              <p className="text-gray-600 mt-2">{question.content}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-500 hover:text-indigo-600">
                <ThumbsUp className="h-5 w-5" />
                <span className="ml-1">{question.likes}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-indigo-600">
                <MessageCircle className="h-5 w-5" />
                <span className="ml-1">{question.answers?.length || 0}</span>
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <img
              src={question.author.avatar}
              alt={question.author.name}
              className="h-6 w-6 rounded-full"
            />
            <span className="ml-2">{question.author.name}</span>
            <span className="ml-2">·</span>
            <span className="ml-2">{new Date(question.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}