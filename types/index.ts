export interface Project {
    id: string;
    name: string;
    description: string;
}

export interface DemoRequest {
    name: string;
    email: string;
    company: string;
}
// Type definitions for the application

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  color: string;
  icon: string;
  overview: string;
  problemStatement: string[];
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  impact: string[];
  fullContent: string;
}

export interface DemoRequest {
  id?: number;
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  projectOfInterest?: string;
  preferredDemoDate?: string;
  status?: 'new' | 'contacted' | 'scheduled' | 'completed';
  created_at?: string;
  updated_at?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  projectOfInterest: string;
  preferredDemoDate: string;
}
