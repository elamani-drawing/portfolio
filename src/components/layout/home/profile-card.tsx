import React from 'react'
import {
  Linkedin,
  Github,
  Instagram,
  Award,
  Calendar,
  MapPin,
} from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function ProfileCard() {
  return (
    <Card>
      <CardContent >
        <div className="rounded-lg flex flex-col items-center shadow-md">

          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/71stSqK9LSBfiBzZLCGRcu/image.png"
            alt="Profile"
            className="w-[150px] h-[140px] object-cover rounded-md mb-4"
          />
          <span className="font-bold text-xl mt-4 mb-2"> Elamani Drawing </span>
          <div className="bg-gray-200 dark:bg-[#222] text-sm p-2 px-4 rounded-full mb-8">
            Software Developer
          </div>
        </div>
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div className="w-full flex items-center mb-4 bg-gray-200 dark:bg-[#222] p-4 rounded-lg">
          <Award
            className="text-yellow-600 dark:text-yellow-500 mr-4"
            size={24}
          />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Champion Régional
            </p>
            <p className="font-medium">WorldSkills</p>
          </div>
        </div>
        <div className="w-full flex items-center mb-4 bg-gray-200 dark:bg-[#222] p-4 rounded-lg">
          <Calendar
            className="text-yellow-600 dark:text-yellow-500 mr-4"
            size={24}
          />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">BIRTHDAY</p>
            <p className="font-medium">22 Décembre 2005</p>
          </div>
        </div>
        <div className="w-full flex items-center mb-8 bg-gray-200 dark:bg-[#222] p-4 rounded-lg">
          <MapPin
            className="text-yellow-600 dark:text-yellow-500 mr-4"
            size={24}
          />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">LOCATION</p>
            <p className="font-medium">France</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">

        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div className="flex space-x-4 mt-auto">
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-[#222] dark:hover:bg-[#333] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-[#222] dark:hover:bg-[#333] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-[#222] dark:hover:bg-[#333] transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}