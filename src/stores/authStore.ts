import { create } from 'zustand';
import { authApi, userApi } from '../lib/api';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'instructor';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: {
    email: string;
    password: string;
    name: string;
    role: 'student' | 'instructor';
  }) => Promise<void>;
  loadUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async (credentials) => {
    try {
      await authApi.login(credentials);
      const user = await userApi.getProfile();
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },
  logout: async () => {
    try {
      await authApi.logout();
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  },
  register: async (userData) => {
    try {
      await authApi.register(userData);
      const user = await userApi.getProfile();
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },
  loadUser: async () => {
    try {
      set({ isLoading: true });
      const user = await userApi.getProfile();
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));