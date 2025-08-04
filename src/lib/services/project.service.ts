// import { langAvailable } from "@/lib/constant"
import { GetProjectsFromGitHub, RepoInfo } from "../github"

export interface ProjectCard {
    title: string
    period: string
    category: string
    description: string
    techStack: string[]
    codeLink?: string
    liveLink?: string
}

export const data = {
    'fr': [
        {
            title: 'AgriSure fr',
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

    ],
    'en': [
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

    ]
}


export async function GetProjects(lang: string, 
  repos: RepoInfo[]
): Promise<ProjectCard[]> {
    return await GetProjectsFromGitHub(repos);
}