
import { Project, Experience, TechItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'smart-save',
    title: 'SmartSave Agent',
    description: 'An agentic financial assistant that parses MPESA/Bank SMS, categorizes transactions via LLM, visualizes cashflow, and enables automated savings logic.',
    tech: ['Node.js', 'LLM', 'Redis', 'PostgreSQL'],
    type: 'Personal',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'e-commerce-llm',
    title: 'LLM E-commerce',
    description: 'A scalable e-commerce backend utilizing Java Spring Boot and AI-driven recommendation engines.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Docker'],
    type: 'Personal',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop'
  },
  {
    id: 'internet-banking',
    title: 'Internet Banking',
    description: 'Core banking web application built for high-concurrency transactions and top-tier security.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    type: 'Work',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'nusaf',
    title: 'NUSAF System',
    description: 'Large-scale social action fund management system, focusing on data integrity and real-time reporting.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL'],
    type: 'Work',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'E&M Technology Hub',
    role: 'Software Developer',
    period: '2022 - Present',
    description: [
      'Developed and maintained scalable microservices for financial institutions.',
      'Optimized database queries and indexing for heavy transaction loads.',
      'Implemented messaging patterns using Kafka for asynchronous processing.'
    ],
    projects: ['Internet Banking', 'NUSAF', 'Banking Web Applications']
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Java', category: 'Backend', proficiency: 90 },
  { name: 'Spring Boot', category: 'Backend', proficiency: 88 },
  { name: 'Node.js', category: 'Backend', proficiency: 85 },
  { name: 'PostgreSQL', category: 'Database', proficiency: 80 },
  { name: 'MySQL', category: 'Database', proficiency: 82 },
  { name: 'Docker', category: 'DevOps', proficiency: 75 },
  { name: 'Kafka', category: 'Tools', proficiency: 70 },
  { name: 'Redis', category: 'Tools', proficiency: 78 },
  { name: 'CI/CD Pipelines', category: 'DevOps', proficiency: 50 }
];
