import { SkillCard } from "./skill-card";
import TechnicalSkills from "./technical-skills";
import { useI18n } from "@/locales/client";
import { GetBio, GetSkills } from "@/lib/services/home.service";
import { useState } from "react";
import { Braces, Code, Database, Globe, Shield, Smartphone, Wifi } from "lucide-react";


type ServiceCategory =
    | 'All'
    | 'Development'
    | 'Database'
    | 'Reseaux'
    | 'Cybersecurity'
    | 'Mobile'


const getCategoryIcon = (category: ServiceCategory) => {
    switch (category) {
        case 'Development':
            return <Braces size={18} /> 
        case 'Database':
            return <Database size={18} />
        case 'Cybersecurity':
            return <Shield size={18} />
        case 'Mobile':
            return <Smartphone size={18} />
        case 'Reseaux':
            return <Wifi size={18} />
        default:
            return <Code size={18} />
    }
}

export default function HomeContent() {
    const t = useI18n();
    const skills = GetSkills(t('lang'));
    const paragraphs = GetBio(t('lang'));
    const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');

    const displayedSkills =
        activeCategory === 'All'
            ? skills
            : skills.filter((skill) => skill.tags.includes(activeCategory));

    const categories: { category: ServiceCategory, label: string }[] = [
        { category: 'All', label: t('section.home.myServices.category.All') },
        { category: 'Development', label: t('section.home.myServices.category.Development') },
        { category: 'Database', label: t('section.home.myServices.category.Database') },
        { category: 'Reseaux', label: t('section.home.myServices.category.Reseaux') },
        { category: 'Cybersecurity', label: t('section.home.myServices.category.Cybersecurity') },
        { category: 'Mobile', label: t('section.home.myServices.category.Mobile') },
    ]

    return (
        <div>
            <div className="mb-8">
                {paragraphs.map((text, index) => (
                    <p key={index} className="mb-4">
                        {text}
                    </p>
                ))}
            </div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">{t("section.home.myServices.title")}</h2>

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
                <div className="grid grid-cols-1 gap-6">
                    {displayedSkills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}

                </div>
            </div>
            <div>
                <TechnicalSkills />
            </div>
        </div>
    )
}