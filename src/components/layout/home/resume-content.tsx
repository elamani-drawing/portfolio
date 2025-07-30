import Timelines from "@/components/layout/home/timeline";
import { BookOpen } from "lucide-react";

export default function ResumeContent() {
    const data = [
        {
            title: 'Développeur 1',
            subTitle: 'Société XYZ',
            year: '2025',
            descriptions: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ],
        },
        {
            title: 'Développeur 2',
            subTitle: 'Société XYZ',
            year: '2025',
            descriptions: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ],
        },
    ]
    return (
        <div>
            <Timelines title="Scolarites" icon={<BookOpen size={24} />} data={data} />
            <Timelines title="Experiences" icon={<BookOpen size={24} />} data={data} />
        </div>
    );
}