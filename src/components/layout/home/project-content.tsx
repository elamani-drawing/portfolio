import React, { useState } from 'react'
import {
  Code,
  ExternalLink,
  Briefcase,
  Shield,
  Smartphone,
  Globe,
} from 'lucide-react'
type ProjectCategory =
  | 'All'
  | 'Web Development'
  | 'Software'
  | 'Cybersecurity'
  | 'Mobile'
interface TechBadgeProps {
  name: string
}
const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="inline-block px-2 py-1 text-sm rounded-md bg-gray-100 dark:bg-[#222] text-gray-800 dark:text-gray-300 mr-2 mb-2">
      {name}
    </span>
  )
}
interface ProjectCardProps {
  title: string
  period: string
  category: string
  description: string
  techStack: string[]
  codeLink?: string
  liveLink?: string
}
const ProjectCard = ({
  title,
  period,
  category,
  description,
  techStack,
  codeLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md relative">
      <div className="absolute top-0 right-0 w-8 h-8">
        {category === 'Web Development' && (
          <Globe className="text-[var(--main-color)]" size={32} />
        )}
        {category === 'Software' && (
          <Briefcase className="text-[var(--main-color)]" size={32} />
        )}
        {category === 'Cybersecurity' && (
          <Shield className="text-[var(--main-color)]" size={32} />
        )}
        {category === 'Mobile' && (
          <Smartphone className="text-[var(--main-color)]" size={32} />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        <div className="flex items-center mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {period}
          </span>
          <span className="mx-2">|</span>
          <span className="text-sm text-[var(--main-color)] dark:text-[var(--main-color)]">
            {category}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap">
            {techStack.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </div>
        <div className="flex space-x-3">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[var(--main-color)] dark:hover:text-[var(--main-color)]"
            >
              <Code size={18} className="mr-1" />
              <span>Code</span>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[var(--main-color)] dark:hover:text-[var(--main-color)]"
            >
              <ExternalLink size={18} className="mr-1" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const categories: ProjectCategory[] = [
  'All',
  'Web Development',
  'Software',
  'Cybersecurity',
  'Mobile',
]
const projects: ProjectCardProps[] = [
  {
    title: 'AgriSure',
    period: 'March 2025 - Present',
    category: 'Web Development',
    description:
      'Improved financial access for over 12,000 farmers boosting loan approvals by 35% via CIBIL-based lending, integrating AI insights, and Hindi support via Google Translation. Engineered the full-stack system, handling frontend UI, backend API and database management.',
    techStack: ['React JS', 'Node.js', 'Express.js', 'MongoDB'],
    codeLink: '#',
  },
  {
    title: 'BuildBridge',
    period: 'March 2025 - Present',
    category: 'Web Development',
    description:
      'Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.',
    techStack: ['React JS', 'Node.js', 'Express.js', 'MongoDB'],
    codeLink: '#',
    liveLink: '#',
  },
  {
    title: 'FarmConnect',
    period: 'Feb 2025 - Present',
    category: 'Web Development',
    description:
      'Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.',
    techStack: ['React JS', 'Node.js', 'Express.js', 'MongoDB'],
    codeLink: '#',
    liveLink: '#',
  },
  {
    title: 'WealthWise',
    period: 'Jan 2025 - Present',
    category: 'Software',
    description:
      'Enhanced financial literacy and user engagement by 40% through an interactive fintech platform integrating gamification. Developed an engaging React UI with gamified elements ensuring smooth user interactions.',
    techStack: ['React JS', 'Node JS', 'Firebase', 'API Integration'],
    codeLink: '#',
  },
  {
    title: 'Blood Shortage Survey and Dashboard',
    period: 'Jan 2025 - Present',
    category: 'Software',
    description:
      'Increased efficiency of blood shortage tracking for healthcare organizations by 60% through a real-time analytics dashboard. Built an intuitive React.js dashboard with real-time charts and data visualizations.',
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    codeLink: '#',
  },
  {
    title: 'SecureNet',
    period: 'Dec 2024 - Feb 2025',
    category: 'Cybersecurity',
    description:
      'Developed an intrusion detection system that reduced false positives by 45% while improving threat detection accuracy. Implemented machine learning algorithms to analyze network traffic patterns and identify anomalies.',
    techStack: ['Python', 'TensorFlow', 'React JS', 'Node.js'],
    codeLink: '#',
  },
  {
    title: 'MobiHealth',
    period: 'Nov 2024 - Jan 2025',
    category: 'Mobile',
    description:
      'Created a mobile health tracking application that increased user medication adherence by 37%. Features include appointment scheduling, medication reminders, and health metric tracking with visualization.',
    techStack: ['React Native', 'Firebase', 'Express.js'],
    codeLink: '#',
    liveLink: '#',
  },
]

const getCategoryIcon = (category: ProjectCategory) => {
  switch (category) {
    case 'Web Development':
      return <Globe size={18} />
    case 'Software':
      return <Briefcase size={18} />
    case 'Cybersecurity':
      return <Shield size={18} />
    case 'Mobile':
      return <Smartphone size={18} />
    case 'All':
    default:
      return <Code size={18} />
  }
}

export default function ProjectContent () {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="mb-12 container mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />
        <h2 className="text-4xl font-bold">Mes dernieres réalisation</h2>
      </div>
      <div className="w-16 h-1 bg-[var(--main-color)] dark:bg-[var(--main-color)] mb-6"></div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Here are some of the projects I have worked on recently.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeCategory === category ? 'bg-[#0f172a] dark:bg-[#1a1a1a] text-white' : 'bg-gray-100 dark:bg-[#222] hover:bg-gray-200 dark:hover:bg-[#333] text-gray-700 dark:text-gray-300 cursor-pointer'}`}
          >
            {getCategoryIcon(category)}
            <span>{category}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            period={project.period}
            category={project.category}
            description={project.description}
            techStack={project.techStack}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  )
}
