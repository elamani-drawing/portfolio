import React, { ReactNode } from 'react'
import {
  Linkedin,
  Github,
  Award,
  Calendar,
  Youtube,
} from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface RowCardProps {
  icon: ReactNode
  title: string
  description: string
}

function RowCard({ icon, title, description }: RowCardProps) {
  return (
    <div className="w-full flex items-center mb-4 bg-gray-200 dark:bg-[#222] p-4 rounded-lg">
      <div className="text-[var(--main-color)] dark:text-[var(--main-color)] mr-4"> {icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
}

const socialLinks = [
  { href: "https://www.linkedin.com/in/said-el-amani-assani/", icon: <Linkedin size={20} /> },
  { href: "https://github.com/elamani-drawing/", icon: <Github size={20} /> },
  { href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1", icon: <Youtube size={20} /> },
];

export default function ProfileCard() {
  return (
    <Card>
      <CardContent >
        <div className="rounded-lg flex flex-col items-center shadow-md">

          <img
            src="https://media.tenor.com/MKkJWYigjycAAAAM/cute-cat-cat-cute.gif"
            alt="Profile"
            className="w-[150px] h-[140px] object-cover rounded-md mb-4"
          />
          <span className="font-bold text-xl mt-4 mb-2"> Elamani Drawing </span>
          <div className="bg-gray-200 dark:bg-[#222] text-sm p-2 px-4 rounded-full mb-8">
            Software Developer
          </div>
        </div>
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <RowCard
          icon={<Award size={24} />}
          title="Champion Régional"
          description="WorldSkills"
        />
        <RowCard
          icon={<Calendar size={24} />}
          title="BIRTHDAY"
          description="11 Janvier 2001"
        />
        <RowCard
          icon={<Calendar size={24} />}
          title="LOCATION"
          description="France"
        />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div className="flex space-x-4 mt-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-[#222] dark:hover:bg-[#333] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}