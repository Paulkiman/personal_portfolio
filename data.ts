
import { Project, Experience, ExperienceProject, TechItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description: 'HIPAA-inspired, event-driven microservices architecture across 9 isolated services with database-per-service design, built for clinical-grade reliability.',
    bullets: [
      'Engineered 9 isolated microservices using Node.js, Express, Sequelize, PostgreSQL, and RabbitMQ with strict database-per-service boundaries.',
      'Eliminated cross-service data inconsistency by implementing the transactional outbox pattern, ensuring reliable event delivery with zero data loss.',
      'Strengthened system security using JWT-based role access control across six clinical roles.',
      'Preserved full auditability by designing append-only medical records, enabling traceable history without data mutation.',
      'Automated schema evolution using Sequelize migrations, removing manual deployment inconsistencies across environments.'
    ],
    tech: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'RabbitMQ', 'JWT'],
    type: 'Personal',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/Paulkiman/Hospital-Management-System'
  },
  {
    id: 'ride-hailing',
    title: 'Ride Hailing System',
    description: 'High-concurrency ride-hailing backend engineered for real-time driver-passenger interactions, geospatial matching, and financial consistency at scale.',
    bullets: [
      'Architected the backend using Node.js, TypeScript, Fastify, PostgreSQL, Redis, RabbitMQ, and Socket.io for real-time interactions.',
      'Reduced driver matching latency by leveraging Redis geospatial indexing for proximity-based search.',
      'Eliminated race conditions and duplicate ride assignments through atomic Redis locking mechanisms.',
      'Enabled scalable real-time tracking using Socket.io with Redis adapter, supporting multi-instance deployments.',
      'Ensured financial consistency by implementing an idempotent payment ledger, preventing duplicate transactions during retry scenarios.'
    ],
    tech: ['Node.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Socket.io'],
    type: 'Personal',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/Paulkiman/Ride-Hailing-System'
  },
  {
    id: 'internet-banking',
    title: 'Internet Banking System',
    description: 'Secure, transaction-intensive banking platform built with Node.js and Spring Boot microservices, covering authentication, onboarding, payments, and transaction processing.',
    bullets: [
      'Developed and maintained core modules for authentication, onboarding, accounts, payments, and transaction processing within a microservices architecture.',
      'Improved transaction reliability through deep API debugging, request–response validation, and log-based failure analysis.',
      'Strengthened system integrity by implementing robust validation layers and secure REST communication.',
      'Collaborated across teams to stabilize production workflows and ensure seamless service integration.'
    ],
    tech: ['Node.js', 'Spring Boot', 'MySQL', 'Redis', 'Microservices'],
    type: 'Work',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'solv-ke',
    title: 'SOLV_KE – Reverse Factoring & Group Lending Platform',
    description: 'Fintech lending platform using Spring Boot microservices, enabling SMEs and organized groups to access credit through structured financial workflows.',
    bullets: [
      'Designed and implemented modules for group management, member role assignment, loan origination, approval matrices, and repayment tracking.',
      'Integrated the platform with external systems including Loan Management Systems (LMS), credit scoring services, and payment channels, ensuring seamless loan processing and real-time status updates.',
      'Improved system reliability by implementing robust validation, audit logging, and transaction traceability.',
      'Supported compliance and operational transparency in a regulated financial environment.'
    ],
    tech: ['Spring Boot', 'Java', 'Microservices', 'LMS Integration', 'PostgreSQL'],
    type: 'Work',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 'nusaf',
    title: 'NUSAF System',
    description: 'Large-scale government beneficiary and project management platform handling structured data at scale, with automated workflows and reliable approval pipelines.',
    bullets: [
      'Built and supported a beneficiary registration, approval pipeline, and project tracking system using Node.js with Spring Boot integration for legacy services.',
      'Improved operational efficiency by implementing data validation pipelines and workflow automation, reducing manual processing overhead.',
      'Investigated and resolved system issues through log-driven debugging and API tracing, ensuring consistent data flow across services.',
      'Maintained reliable approval and reporting mechanisms under high data volume conditions.'
    ],
    tech: ['Node.js', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    type: 'Work',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking System',
    description: 'Modular hotel booking platform built on Spring Boot microservices with AI-driven interaction capabilities via an MCP server integration.',
    bullets: [
      'Decomposed the system into independently deployable services for user management, hotel listings, reservations, and notifications.',
      'Solved inter-service dependency and startup failures by restructuring service initialization and configuration management.',
      'Implemented JWT-based security and resolved breaking changes in authentication libraries.',
      'Stabilized the build system by fixing Gradle multi-module inconsistencies and YAML configuration corruption.',
      'Extended system capabilities by introducing an MCP (Model Context Protocol) server, enabling AI-driven interaction with booking services without additional integration layers.'
    ],
    tech: ['Spring Boot', 'Java', 'JWT', 'Gradle', 'MCP', 'PostgreSQL'],
    type: 'Personal',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/Paulkiman/Hotel-Booking-System'
  },
  {
    id: 'learning-platform',
    title: 'Advanced Learning Platform',
    description: 'Scalable learning platform built on Spring Boot microservices with fault-tolerant communication, Redis caching, and an event-driven enrollment workflow.',
    bullets: [
      'Engineered microservices handling authentication, course management, assessments, media delivery, and notifications.',
      'Implemented fault-tolerant communication with Resilience4j (retry and exponential backoff), ensuring consistent notification delivery under failure conditions.',
      'Secured the platform through a JWT-based API Gateway and enforced service-to-service authentication using API keys.',
      'Improved performance and reduced database load by integrating Redis caching layers.',
      'Designed an event-driven enrollment workflow, enabling loose coupling between services and supporting horizontal scalability.'
    ],
    tech: ['Spring Boot', 'Java', 'Redis', 'JWT', 'Resilience4j', 'PostgreSQL'],
    type: 'Personal',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop',
    githubUrl: 'https://github.com/Paulkiman/Advanced-Learning-Platform'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'E&M Technology Hub',
    role: 'Software Developer',
    period: '2022 - Present',
    description: [
      'Developed and maintained scalable microservices for financial institutions, covering authentication, onboarding, payments, and transaction processing.',
      'Improved transaction reliability through deep API debugging, request–response validation, and log-based failure analysis, reducing processing errors.',
      'Implemented robust validation layers and secure REST communication to strengthen system integrity.',
      'Collaborated across teams to stabilize production workflows and ensure seamless service integration under high data volume conditions.'
    ],
    projects: [
      { label: 'Internet Banking System', projectId: 'internet-banking' },
      { label: 'NUSAF Government Platform', projectId: 'nusaf' },
      { label: 'SOLV_KE – Reverse Factoring & Group Lending', projectId: 'solv-ke' }
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Java', category: 'Backend', proficiency: 90 },
  { name: 'Spring Boot', category: 'Backend', proficiency: 88 },
  { name: 'Node.js + Express', category: 'Backend', proficiency: 87 },
  { name: 'Prisma / Sequelize', category: 'Backend', proficiency: 82 },
  { name: 'PostgreSQL', category: 'Database', proficiency: 85 },
  { name: 'MySQL', category: 'Database', proficiency: 80 },
  { name: 'Redis', category: 'Tools', proficiency: 78 },
  { name: 'RabbitMQ / Kafka', category: 'Tools', proficiency: 75 },
  { name: 'Docker', category: 'DevOps', proficiency: 75 },
  { name: 'TypeScript', category: 'Backend', proficiency: 83 },
  { name: 'JWT / Auth', category: 'Tools', proficiency: 88 },
  { name: 'CI/CD Pipelines', category: 'DevOps', proficiency: 65 }
];
