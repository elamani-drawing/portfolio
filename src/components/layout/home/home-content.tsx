import { SkillCard } from "./skill-card";
import TechnicalSkills from "./technical-skills";
import { useI18n } from "@/locales/client";
import { GetBio, GetSkills } from "@/lib/services/home.service";

export default function HomeContent() {
    const t = useI18n();
    const skills = GetSkills(t('lang'));
    const paragraphs = GetBio(t('lang'));
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
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