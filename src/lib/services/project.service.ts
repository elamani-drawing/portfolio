import { langAvailable } from "@/lib/constant"

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
}


export function GetProjects(lang: string) {
    let d = data[lang as langAvailable];
    if (!!!d) return data.en;
    return d;
}