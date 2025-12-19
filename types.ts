
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: 'Work' | 'Personal';
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  projects: string[];
}

export interface TechItem {
  name: string;
  category: 'Backend' | 'Database' | 'DevOps' | 'Tools';
  proficiency: number; // 1-100
}
