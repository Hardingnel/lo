import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com/v1',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const courseApi = {
  getCourses: async (filters?: Record<string, any>) => {
    const { data } = await api.get('/courses', { params: filters });
    return data;
  },

  getCourseById: async (id: number) => {
    const { data } = await api.get(`/courses/${id}`);
    return data;
  },

  enrollCourse: async (courseId: number) => {
    const { data } = await api.post(`/courses/${courseId}/enroll`);
    return data;
  },

  getModules: async (courseId: number) => {
    const { data } = await api.get(`/courses/${courseId}/modules`);
    return data;
  },

  submitQuiz: async (moduleId: number, answers: Record<string, any>) => {
    const { data } = await api.post(`/modules/${moduleId}/quiz`, answers);
    return data;
  },
};

export const authApi = {
  login: async (credentials: { email: string; password: string }) => {
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    return data;
  },

  logout: async () => {
    await api.post('/auth/logout');
    localStorage.removeItem('token');
  },

  register: async (userData: {
    email: string;
    password: string;
    name: string;
    role: 'student' | 'instructor';
  }) => {
    const { data } = await api.post('/auth/register', userData);
    return data;
  },
};

export const userApi = {
  getProfile: async () => {
    const { data } = await api.get('/user/profile');
    return data;
  },

  updateProfile: async (profileData: Record<string, any>) => {
    const { data } = await api.put('/user/profile', profileData);
    return data;
  },

  getEnrolledCourses: async () => {
    const { data } = await api.get('/user/courses');
    return data;
  },
};

export const communityApi = {
  getQuestions: async (courseId: number) => {
    const { data } = await api.get(`/courses/${courseId}/questions`);
    return data;
  },

  askQuestion: async (courseId: number, question: { title: string; content: string }) => {
    const { data } = await api.post(`/courses/${courseId}/questions`, question);
    return data;
  },

  answerQuestion: async (questionId: number, answer: { content: string }) => {
    const { data } = await api.post(`/questions/${questionId}/answers`, answer);
    return data;
  },

  submitReview: async (courseId: number, review: { rating: number; content: string }) => {
    const { data } = await api.post(`/courses/${courseId}/reviews`, review);
    return data;
  },
};