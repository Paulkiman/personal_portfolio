
export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  type: 'Work' | 'Personal';
  imageUrl: string;
  githubUrl?: string;
}

export interface ExperienceProject {
  label: string;
  projectId?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  projects: ExperienceProject[];
}

export interface TechItem {
  name: string;
  category: 'Backend' | 'Database' | 'DevOps' | 'Tools';
  proficiency: number; // 1-100
}
