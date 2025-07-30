import React, { useState } from 'react'
import {
    Code,
    LayoutGrid,
    Database,
    CloudCog,
    Boxes,
    Braces,
    Stars,
} from 'lucide-react'
type SkillCategory =
    | 'All'
    | 'Languages'
    | 'Frameworks/Libraries'
    | 'ML/Data'
    | 'Blockchain/Web3'
    | 'Cloud/DevOps'
    | 'Concepts'
interface SkillItemProps {
    icon: React.ReactNode
    name: string
}
const SkillItem = ({ icon, name }: SkillItemProps) => {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="flex-shrink-0">{icon}</div>
            <span className="font-medium">{name}</span>
        </div>
    )
}

const categories: SkillCategory[] = [
    'All',
    'Languages',
    'Frameworks/Libraries',
    'ML/Data',
    'Blockchain/Web3',
    'Cloud/DevOps',
    'Concepts',
]
const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
        case 'Languages':
            return <Code size={18} />
        case 'Frameworks/Libraries':
            return <LayoutGrid size={18} />
        case 'ML/Data':
            return <Database size={18} />
        case 'Blockchain/Web3':
            return <Boxes size={18} />
        case 'Cloud/DevOps':
            return <CloudCog size={18} />
        case 'Concepts':
            return <Braces size={18} />
        default:
            return <Stars size={18} /> // All
    }
}
const skills = {
    'Languages': [
        {
            name: 'C++',
            icon: <span className="text-blue-500 font-bold">C++</span>,
        },
        {
            name: 'Java',
            icon: <span className="text-orange-500 font-bold">☕</span>,
        },
        {
            name: 'Python',
            icon: <span className="text-yellow-500 font-bold">🐍</span>,
        },
        {
            name: 'JavaScript',
            icon: <span className="text-yellow-400 font-bold">JS</span>,
        },
        {
            name: 'TypeScript',
            icon: <span className="text-blue-600 font-bold">TS</span>,
        },
        {
            name: 'Dart',
            icon: <span className="text-cyan-500 font-bold">🎯</span>,
        },
        {
            name: 'Kotlin',
            icon: <span className="text-purple-500 font-bold">K</span>,
        },
        {
            name: 'Solidity',
            icon: (
                <span className="text-gray-700 dark:text-gray-300 font-bold">⬢</span>
            ),
        },
        {
            name: 'SQL',
            icon: <span className="text-blue-400 font-bold">SQL</span>,
        },
        {
            name: 'Rust',
            icon: <span className="text-orange-600 font-bold">🦀</span>,
        },
        {
            name: 'Go',
            icon: <span className="text-cyan-400 font-bold">Go</span>,
        },
        {
            name: 'Ruby',
            icon: <span className="text-red-600 font-bold">💎</span>,
        },
        {
            name: 'Swift',
            icon: <span className="text-orange-500 font-bold">🐦</span>,
        },
    ],
    'Frameworks/Libraries': [
        {
            name: 'React',
            icon: <span className="text-blue-400 font-bold">⚛️</span>,
        },
        {
            name: 'Angular',
            icon: <span className="text-red-500 font-bold">A</span>,
        },
        {
            name: 'Vue',
            icon: <span className="text-green-500 font-bold">V</span>,
        },
        {
            name: 'Laravel',
            icon: <span className="text-red-600 font-bold">L</span>,
        },
        {
            name: 'Django',
            icon: (
                <span className="text-green-800 dark:text-green-600 font-bold">
                    D
                </span>
            ),
        },
        {
            name: 'Flutter',
            icon: <span className="text-cyan-500 font-bold">F</span>,
        },
        {
            name: 'Express',
            icon: (
                <span className="text-gray-700 dark:text-gray-300 font-bold">Ex</span>
            ),
        },
    ],
    'ML/Data': [
        {
            name: 'TensorFlow',
            icon: <span className="text-orange-500 font-bold">TF</span>,
        },
        {
            name: 'PyTorch',
            icon: <span className="text-red-500 font-bold">PT</span>,
        },
        {
            name: 'Pandas',
            icon: <span className="text-blue-600 font-bold">🐼</span>,
        },
        {
            name: 'NumPy',
            icon: <span className="text-blue-500 font-bold">Np</span>,
        },
    ],
    'Blockchain/Web3': [
        {
            name: 'Ethereum',
            icon: <span className="text-purple-600 font-bold">Ξ</span>,
        },
        {
            name: 'Web3.js',
            icon: <span className="text-orange-500 font-bold">W3</span>,
        },
        {
            name: 'Hardhat',
            icon: <span className="text-yellow-500 font-bold">🎩</span>,
        },
    ],
    'Cloud/DevOps': [
        {
            name: 'AWS',
            icon: <span className="text-orange-400 font-bold">AWS</span>,
        },
        {
            name: 'Docker',
            icon: <span className="text-blue-500 font-bold">🐳</span>,
        },
        {
            name: 'Kubernetes',
            icon: <span className="text-blue-600 font-bold">K8s</span>,
        },
        {
            name: 'CI/CD',
            icon: <span className="text-green-500 font-bold">CI/CD</span>,
        },
    ],
    'Concepts': [
        {
            name: 'OOP',
            icon: <span className="text-blue-500 font-bold">OOP</span>,
        },
        {
            name: 'Design Patterns',
            icon: (
                <span className="text-yellow-600 dark:text-yellow-500 font-bold">
                    DP
                </span>
            ),
        },
        {
            name: 'Microservices',
            icon: <span className="text-green-500 font-bold">μs</span>,
        },
        {
            name: 'Agile',
            icon: <span className="text-blue-400 font-bold">A</span>,
        },
    ],
}
const allSkills = Object.values(skills).flat()

export default function TechnicalSkills() {
    const [activeCategory, setActiveCategory] = useState<SkillCategory>('Languages')


    const displayedSkills =
        activeCategory === 'All' ? allSkills : skills[activeCategory]

    return (
        <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Technical Skills</h2>
            <div className="w-16 h-1 bg-yellow-600 dark:bg-yellow-500 mb-3"></div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                My expertise across various technologies and tools
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeCategory === category ? 'bg-[#0f172a] dark:bg-[#1a1a1a] text-white' : 'bg-gray-100 dark:bg-[#222] hover:bg-gray-200 dark:hover:bg-[#333] text-gray-700 dark:text-gray-300'}`}
                    >
                        {getCategoryIcon(category)}
                        <span>{category}</span>
                    </button>
                ))}
            </div>
            <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {displayedSkills.map((skill) => (
                        <SkillItem key={skill.name} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}