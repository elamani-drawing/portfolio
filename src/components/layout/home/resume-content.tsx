import Timelines from "@/components/layout/home/timeline";
import { BookOpen } from "lucide-react";
import { useI18n } from "@/locales/client";
import { GetExperiences, GetSchooling } from "@/lib/services/resume.service";

export default function ResumeContent() {
    const t = useI18n();
    const schooling = GetSchooling(t('lang'));
    const experiences = GetExperiences(t('lang'));
    return (
        <div>
            <Timelines title={t("section.resume.experiences.title")} icon={<BookOpen size={24} />} data={experiences} />
            <Timelines title={t("section.resume.schooling.title")} icon={<BookOpen size={24} />} data={schooling} />
        </div>
    );
}