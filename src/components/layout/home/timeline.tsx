import React from 'react'
interface TimelineItemProps {
    title: string
    subTitle: string
    year: string
    descriptions: string[]
}
const TimelineItem = ({
    title,
    subTitle,
    year,
    descriptions,
}: TimelineItemProps) => {
    return (
        <div className="mb-12 relative">
            <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-[var(--main-color)] dark:bg-[var(--main-color)] flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
            <div className="ml-8 border-l-2 border-gray-200 dark:border-gray-800 pl-8 pb-2">
                <h3 className="text-xl font-bold">
                    {title}
                </h3>
                <p className="text-[var(--main-color)] dark:text-[var(--main-color)] mb-4">{subTitle}
                    <span className="mx-2">|</span><span className="text-gray-500 dark:text-gray-200"> {year}</span> </p>
                <ul className="list-disc space-y-2">
                    {descriptions.map((responsibility, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">
                            {responsibility}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function Timelines({ icon, data, title }: { icon?: React.ReactNode, data: TimelineItemProps[], title: string }) {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
                <div className="text-[var(--main-color)] dark:text-[var(--main-color)]">{icon}</div>
                <h2 className="text-4xl font-bold">{title}</h2>
            </div>
            <div className="w-16 h-1 bg-[var(--main-color)] dark:bg-[var(--main-color)] mb-8"></div>
            <div className="relative pl-4">
                {data.map((exp, index) => (
                    <TimelineItem
                        key={index}
                        title={exp.title}
                        subTitle={exp.subTitle}
                        year={exp.year}
                        descriptions={exp.descriptions}
                    />
                ))}
            </div>
        </div>
    )
}
