import Timelines from "@/components/layout/home/timeline";
import { BookOpen } from "lucide-react";

export default function ResumeContent() {
    const data = [
        {
            title: 'Senior IOS Developer',
            subTitle: 'Société XYZ',
            year: 'Aug 2022 - Current',
            descriptions: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ],
        },
        {
            title: 'IOS Developer',
            subTitle: 'Société XYZ',
            year: 'Jun 2021 - Jul 202',
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