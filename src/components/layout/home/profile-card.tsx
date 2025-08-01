"use client";
import React, { ReactNode, useEffect, useState } from 'react'
import {
  Linkedin,
  Github,
  Award,
  Calendar,
  Youtube,
  Mail,
} from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useI18n } from "@/locales/client";
import { MAIL, USER } from '@/lib/constant';

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


const imageLinks = [
  "https://media.tenor.com/MKkJWYigjycAAAAM/cute-cat-cat-cute.gif",
  "https://media.tenor.com/Jp441Dss2BgAAAAM/type-cat.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyZnRvYzBvdHZvZGZicmgyaTRrZXR6c29oaWlha3Y1Y2duZGhzdXBsNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pOKrXLf9N5g76/source.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTd4OHF2M2tvaHRmc2kwbndjbTFha2ZyOWQweTFvaWRwbXMzaHExZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oKIPnAiaMCws8nOsE/giphy-downsized.gif",
]

export default function ProfileCard() {
  const [image, setImage] = useState<string>(imageLinks[0]);
  const t = useI18n();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    setImage(imageLinks[randomIndex]);
  }, []);

  return (
    <Card>
      <CardContent >
        <div className="rounded-lg flex flex-col items-center shadow-md">
          <img
            src={image}
            alt="Profile"
            className="w-[150px] h-[140px] object-cover rounded-md mb-4"
          />
          <span className="font-bold text-xl mt-4 mb-2"> {USER} </span>
          <div className='flex flex-wrap justify-center'>
            <div className="bg-gray-200 dark:bg-[#222] text-sm p-2 px-4 rounded-full mb-2 cursor-pointer" title={t('job.softwareEngineer.description')}>
              {t('job.softwareEngineer.label')}
            </div>
            <div className="bg-gray-200 dark:bg-[#222] text-sm p-2 px-4 rounded-full mb-2 cursor-pointer" title={t('job.fullStackDeveloper.description')}>
              {t('job.fullStackDeveloper.label')}
            </div>
            <div className="bg-gray-200 dark:bg-[#222] text-sm p-2 px-4 rounded-full mb-2 cursor-pointer" title={t('job.cybersecurityEngineer.description')}>
              {t('job.cybersecurityEngineer.label')}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <RowCard
          icon={<Calendar size={24} />}
          title={t('location')}
          description="France"
        />
        <a href={'mailto:' + MAIL} title={MAIL}><RowCard
          icon={<Mail size={24} />}
          title="Email"
          description="...@gmail.com"
        /> </a>
        <RowCard
          icon={<Calendar size={24} />}
          title={t('birthday.title')}
          description={t('birthday.value')}
        />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div className="flex space-x-4 mt-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
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