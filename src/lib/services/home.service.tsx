import { Smartphone, Code, Gamepad2, Database } from "lucide-react";
import { langAvailable } from "../constant";

const skills = {
  'fr': [
    {
      icon: <Smartphone className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Développement D'Applications fr",
      description:
        "Développement d'applications en Java et C#, en mettant l'accent sur la robustesse, la maintenabilité et une excellente expérience utilisateur.",
    },
    {
      icon: <Code className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Développement Web",
      description:
        "Création de sites web performants et adaptés aux besoins des utilisateurs, avec une attention particulière à l'optimisation et à l'ergonomie.",
    },
    {
      icon: <Gamepad2 className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Développement De Jeux Vidéo",
      description:
        "Conception et développement de jeux interactifs avec Unity, en combinant créativité et technologies avancées.",
    },
    {
      icon: <Database className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Gestion De Bases De Données (SGBD)",
      description:
        "Conception, gestion et optimisation de bases de données, principalement SQL et NoSQL.",
    },
  ],
  'en': [
    {
      icon: <Smartphone className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Développement D'Applications",
      description:
        "Développement d'applications en Java et C#, en mettant l'accent sur la robustesse, la maintenabilité et une excellente expérience utilisateur.",
    },
    {
      icon: <Code className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Développement Web",
      description:
        "Création de sites web performants et adaptés aux besoins des utilisateurs, avec une attention particulière à l'optimisation et à l'ergonomie.",
    },
    {
      icon: <Gamepad2 className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Développement De Jeux Vidéo",
      description:
        "Conception et développement de jeux interactifs avec Unity, en combinant créativité et technologies avancées.",
    },
    {
      icon: <Database className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />,
      title: "Gestion De Bases De Données (SGBD)",
      description:
        "Conception, gestion et optimisation de bases de données, principalement SQL et NoSQL.",
    },
  ]
}

const bio = {
  'fr': [
    `Bonjour ! Je m'appelle Saïd El Amani, je suis un développeur polyvalent.
    Fort d’une solide formation en informatique et animé par une curiosité constante, 
    je conçois des systèmes informatiques performants, sécurisés et centrés sur l’utilisateur, 
    aussi bien pour le web, le desktop, le mobile que pour les systèmes embarqués et distribués.`,

    `Mon objectif est de transformer des idées complexes en solutions simples, robustes et efficaces.
    Je veille à ce que chaque projet soit optimisé pour répondre aux besoins spécifiques des utilisateurs, tout en garantissant une expérience fluide et intuitive.
    Mon approche repose sur une compréhension approfondie des enjeux et objectifs du client, afin de livrer un produit à la fois performant, fiable et facile à utiliser.
    `
  ],
  'en': [
    `Hi! My name is Saïd El Amani, and i’m a versatile developer.
    With a solid background in computer science and a constant drive to learn,
    I design efficient, secure, and user-focused software systems — for the web, desktop, mobile,
    as well as embedded and distributed environments.`,

    `My goal is to turn complex ideas into simple, robust, and effective solutions.
    I make sure each project is optimized to meet the specific needs of users, while ensuring a smooth and intuitive experience.
    My approach is based on a deep understanding of the client’s goals and challenges, in order to deliver a product that is both powerful and easy to use.
    `
  ]

}

export function GetSkills(lang: string) {
  let d = skills[lang as langAvailable];
  if (!!!d) return skills.en;
  return d;
}

export function GetBio(lang: string) {
  let d = bio[lang as langAvailable];
  if (!!!d) return bio.en;
  return d;
}



