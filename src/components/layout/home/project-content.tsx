import React, { useEffect, useState } from 'react'
import {
  Code,
  ExternalLink,
  Briefcase,
  Shield,
  Smartphone,
  Globe,
} from 'lucide-react'

import { useI18n } from "@/locales/client";
import { GetProjects, ProjectCard as IProjectCard } from '@/lib/services/project.service';
import { GITHUB_PSEUDO } from '@/lib/constant';

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

interface ProjectCardProps extends IProjectCard { }

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



export default function ProjectContent() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const t = useI18n();

  let categories: { category: ProjectCategory, label: string }[] = [
    { category: 'All', label: t("section.projects.category.all") },
    { category: 'Web Development', label: t("section.projects.category.webDevelopment") },
    { category: 'Software', label: t("section.projects.category.software") },
    { category: 'Cybersecurity', label: t("section.projects.category.cybersecurity") },
    { category: 'Mobile', label: t("section.projects.category.mobile") },
  ];

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
      default:
        return <Code size={18} />
    }
  }
  const [projects, setProjects] = useState<IProjectCard[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await GetProjects(t("lang"), [
       { repoName :"morseus", owner: GITHUB_PSEUDO},
      ],
    );
      setProjects(data);
    }
    loadProjects();
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="mb-12 container mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />
        <h2 className="text-4xl font-bold">{t("section.projects.subTitle")}</h2>
      </div>
      <div className="w-16 h-1 bg-[var(--main-color)] dark:bg-[var(--main-color)] mb-6"></div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t("section.projects.description")}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(({ category, label }) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex itemscenter- gap-2 px-4 py-2 rounded-lg transition-colors ${activeCategory === category ? 'bg-[#0f172a] dark:bg-[#1a1a1a] text-white' : 'bg-gray-100 dark:bg-[#222] hover:bg-gray-200 dark:hover:bg-[#333] text-gray-700 dark:text-gray-300 cursor-pointer'}`}
          >
            {getCategoryIcon(category)}
            <span>{label}</span>
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
