export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  hours: number;
  price: number;
  image: string;
  category: string;
  description?: string;
  lectures?: number;
  topics?: string[];
}

export interface EnrolledCourse extends Course {
  progress: number;
  lastAccessed: string;
}

export interface StatCard {
  icon: React.ComponentType;
  label: string;
  value: string | number;
  color?: string;
}