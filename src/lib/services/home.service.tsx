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
    `fr Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae dolores voluptas corporis dolore harum eos, ratione est repellendus ut sint cumque nisi tempore magni maiores nulla illo quae provident.`,

    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.`,

    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ut officiis illo nam repellat quo temporibus perspiciatis totam harum odio deleniti neque in tempora omnis, nulla incidunt explicabo inventore et.`,
  ],
  'en': [
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae dolores voluptas corporis dolore harum eos, ratione est repellendus ut sint cumque nisi tempore magni maiores nulla illo quae provident.`,

    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.`,

    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ut officiis illo nam repellat quo temporibus perspiciatis totam harum odio deleniti neque in tempora omnis, nulla incidunt explicabo inventore et.`,
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



