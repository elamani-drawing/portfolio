import React, { ReactNode } from 'react'
interface SkillCardProps {
  icon: ReactNode
  title: string
  description: string[]
}
export const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  return (
    <div className="bg-gray-200 dark:bg-[#1a1a1a] p-6 rounded-lg flex shadow-sm">
      <div className="mr-4 mt-1 text-[var(--main-color)] dark:text-[var(--main-color)]">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3> 
        {description.map((desc, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-400">
            - {desc}
          </p>
        ))}
      </div>
    </div>
  )
}
