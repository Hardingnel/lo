import { Course, EnrolledCourse } from '../types';

export const featuredCourses: Course[] = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 12453,
    hours: 42,
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    category: 'Development',
    description: 'Master web development with this comprehensive course covering HTML, CSS, JavaScript, React, and Node.js. Perfect for beginners and intermediate developers looking to expand their skillset.',
    lectures: 184,
    topics: [
      'HTML5 & CSS3 Fundamentals',
      'JavaScript ES6+',
      'React & Redux',
      'Node.js & Express',
      'MongoDB & PostgreSQL',
      'DevOps & Deployment'
    ]
  },
  {
    id: 2,
    title: 'Advanced Machine Learning Specialization',
    instructor: 'Dr. Michael Chen',
    rating: 4.9,
    students: 8234,
    hours: 56,
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
    category: 'Data Science'
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    instructor: 'Emily Parker',
    rating: 4.7,
    students: 15678,
    hours: 38,
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    category: 'Marketing'
  }
];

export const enrolledCourses: EnrolledCourse[] = [
  {
    ...featuredCourses[0],
    progress: 65,
    lastAccessed: '2 days ago'
  },
  {
    ...featuredCourses[1],
    progress: 32,
    lastAccessed: '1 week ago'
  }
];