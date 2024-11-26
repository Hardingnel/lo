import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, Search, Bell, User } from 'lucide-react';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <BookOpen className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">LearnHub</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">
                    Browse
                  </Link>
                  <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                    My Learning
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button className="relative p-2 text-gray-600 hover:text-gray-900">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button className="relative p-2 text-gray-600 hover:text-gray-900">
                    <Bell className="h-5 w-5" />
                  </button>
                </div>
                <div className="ml-4 flex items-center">
                  <button className="flex text-sm rounded-full focus:outline-none">
                    <User className="h-8 w-8 text-gray-600 bg-gray-100 rounded-full p-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;