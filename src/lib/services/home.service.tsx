import { Smartphone, Code, Gamepad2, Database, Laptop, Wifi, Sword, CircuitBoard, ShieldCheck } from "lucide-react";
import { langAvailable, USER } from "@/lib/constant";

const skills = {
  'fr': [
    {
      icon: <Laptop size={28} />,
      title: "Développement Logiciel ",
      description: [
        `Développement d’applications logicielles en Java, Python, C, C++ et Rust, en respectant les paradigmes orienté objet, procédural ou fonctionnel.`,
        `Conception, architecture, tests et optimisation de programmes robustes et performants.`,
        `Création, gestion et orchestration de conteneurs avec Docker pour le développement et le déploiement d'applications.`,
        `Utilisation d’outils de compilation, de gestion de projet et de contrôle de version (GCC, Make, Git…).`,
        `Conception d'interfaces homme-machine en respectant les critères ergonomiques et d'accessibilité.`,
      ],
      tags: [
        'Development',
        'Application'
      ]
    },
    {
      icon: <Code size={28} />,
      title: "Développement Web",
      description:
        [
          `Développement backend avec Node.js (Express.js, NestJS), PHP (Symfony) et Python (Django), incluant la conception et la gestion d’API REST, JSON-RPC, GraphQL ou XML.`,
          `Conception de services et webservices REST, GraphQL ou JSON-RPC avec Java, Python, Php et Rust.`,
          `Implémentation d'interfaces utilisateur modernes et responsives avec React, Angular-cli, Next.js et Tailwind CSS.`,
          `Conception d'interfaces homme-machine en respectant les critères ergonomiques et d'accessibilité.`,
          `Implémentation de maquettes graphiques en code fonctionnel, fidèle au design proposé.`,
          `Mise en place de bonnes pratiques de développement, intégration continue et déploiement automatisé.`
        ],
      tags: [
        'Development',
        'Web'
      ]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Développement d'Applications Mobiles",
      description: [
        `Conception et développement d’applications mobiles natives (Java, Kotlin) et hybrides (React Native).`,
        `Utilisation de frameworks comme React Native pour créer des interfaces performantes et multiplateformes.`,
        `Optimisation de l’expérience utilisateur mobile en respectant les contraintes spécifiques (ergonomie, performance, autonomie).`,
      ],
      tags: ['Development', 'Mobile']
    }
    ,
    {
      icon: <Database size={28} />,
      title: "Bases De Données (SGBD)",
      description: [
        `Analyse des besoins et modélisation avec UML, MCD, MLD.`,
        `Conception, administration, gestion et optimisation de bases de données, principalement SQL et NoSQL.`,
        `Conception de requêtes en algèbre relationnelle pour formaliser et optimiser les manipulations des données.`
      ],
      tags: [
        'Database',
      ]
    },
    {
      icon: <Wifi size={28} />,
      title: "Réseaux & Systèmes",
      description: [
        `Administration de systèmes Linux et gestion des services réseaux.`,
        `Configuration et gestion d'infrastructures physiques : routeurs, commutateurs, pare-feu, points d'accès sans fil, etc.`,
        `Mise en place et gestion de VLAN pour une segmentation efficace du trafic réseau.`,
        `Maîtrise des protocoles réseau : TCP/IP, DNS, DHCP, HTTP, FTP, SMTP, SSH, etc.`,
        `Installation, configuration et administration de machines virtuelles.`,
        `Création, gestion et orchestration de conteneurs avec Docker.`,
      ],
      tags: [
        'Reseaux',
      ]
    },
    {
      icon: <Sword size={28} />,
      title: "Sécurité Offensive & Applications",
      description: [
        `Identification proactive et exploitation des vulnérabilités via pentesting et analyses d’attaques ciblées sur systèmes, applications et bases de données.`,
        `Audit, développement sécurisé et protection des applications web, API et services avec gestion des accès, authentification forte et chiffrement des données.`,
        `Mise en place de contre-mesures adaptées, protocoles cryptographiques avancés, et stratégies pour garantir confidentialité, intégrité et disponibilité.`,
      ],
      tags: [
        'Cybersecurity', 'Application'
      ]
    },
    {
      icon: <CircuitBoard size={28} />,
      title: "Sécurité des Systèmes, Réseaux & IoT",
      description: [
        `Gestion et protection des infrastructures réseau, systèmes embarqués et réseaux de capteurs.`,
        `Application des normes de sécurité et déploiement de solutions de détection d’intrusions.`,
        `Mise en place de mécanismes robustes pour assurer disponibilité, confidentialité et intégrité des données.`,
      ],
      tags: [
        'Reseaux', 'Cybersecurity'
      ]
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Conseil, Gouvernance & Conformité",
      description: [
        `Audit organisationnel et technique, définition de politiques de sécurité adaptées.`,
        `Gestion de projets sécurité, sensibilisation et formation aux bonnes pratiques.`,
        `Veille réglementaire et technologique pour assurer conformité aux normes (ISO 27001, RGPD...) et anticiper les menaces.`,
      ],
      tags: [
        'Cybersecurity',
      ]
    }
  ],
  'en': [
    {
      icon: <Laptop size={28} />,
      title: "Software Development",
      description: [
        `Development of software applications in Java, Python, C, C++, and Rust, following object-oriented, procedural, or functional paradigms.`,
        `Design, architecture, testing, and optimization of robust and high-performance programs.`,
        `Creation, management, and orchestration of containers using Docker for application development and deployment.`,
        `Use of compilation tools, project management systems, and version control (GCC, Make, Git…).`,
        `Design of human-machine interfaces following ergonomic and accessibility standards.`,
      ],
      tags: ['Development', 'Application']
    },
    {
      icon: <Code size={28} />,
      title: "Web Development",
      description: [
        `Backend development with Node.js (Express.js, NestJS), PHP (Symfony), and Python (Django), including the design and management of REST, JSON-RPC, GraphQL, or XML APIs.`,
        `Design of REST, GraphQL, or JSON-RPC services and webservices using Java, Python, PHP, and Rust.`,
        `Implementation of modern and responsive user interfaces with React, Angular-cli, Next.js, and Tailwind CSS.`,
        `Design of human-machine interfaces following ergonomic and accessibility standards.`,
        `Conversion of graphical mockups into functional code, faithful to the proposed design.`,
        `Implementation of development best practices, continuous integration, and automated deployment.`,
      ],
      tags: ['Development', 'Web']
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile Application Development",
      description: [
        `Design and development of native mobile applications (Java, Kotlin) and hybrid applications (React Native).`,
        `Use of frameworks like React Native to create high-performance cross-platform interfaces.`,
        `Optimization of mobile user experience with respect to specific constraints (ergonomics, performance, battery life).`,
      ],
      tags: ['Development', 'Mobile']
    },
    {
      icon: <Database size={28} />,
      title: "Databases (DBMS)",
      description: [
        `Needs analysis and modeling with UML, Conceptual Data Model (CDM), and Logical Data Model (LDM).`,
        `Design, administration, management, and optimization of SQL and NoSQL databases.`,
        `Design of queries in relational algebra to formalize and optimize data manipulations.`,
      ],
      tags: ['Database']
    },
    {
      icon: <Wifi size={28} />,
      title: "Networks & Systems",
      description: [
        `Linux systems administration and network services management.`,
        `Configuration and management of physical infrastructures: routers, switches, firewalls, wireless access points, etc.`,
        `Implementation and management of VLANs for effective network traffic segmentation.`,
        `Mastery of network protocols: TCP/IP, DNS, DHCP, HTTP, FTP, SMTP, SSH, etc.`,
        `Installation, configuration, and administration of virtual machines.`,
        `Creation, management, and orchestration of containers using Docker.`,
      ],
      tags: ['Reseaux']
    },
    {
      icon: <Sword size={28} />,
      title: "Offensive Security & Applications",
      description: [
        `Proactive identification and exploitation of vulnerabilities through pentesting and targeted attack analysis on systems, applications, and databases.`,
        `Auditing, secure development, and protection of web applications, APIs, and services with access control, strong authentication, and data encryption.`,
        `Implementation of appropriate countermeasures, advanced cryptographic protocols, and strategies to ensure confidentiality, integrity, and availability.`,
      ],
      tags: ['Cybersecurity', 'Application']
    },
    {
      icon: <CircuitBoard size={28} />,
      title: "System, Network & IoT Security",
      description: [
        `Management and protection of network infrastructures, embedded systems, and sensor networks.`,
        `Application of security standards and deployment of intrusion detection solutions.`,
        `Implementation of robust mechanisms to ensure data availability, confidentiality, and integrity.`,
      ],
      tags: ['Reseaux', 'Cybersecurity']
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Consulting, Governance & Compliance",
      description: [
        `Organizational and technical audits, definition of appropriate security policies.`,
        `Security project management, awareness, and training in best practices.`,
        `Regulatory and technological monitoring to ensure compliance with standards (ISO 27001, GDPR...) and anticipate threats.`,
      ],
      tags: ['Cybersecurity']
    }
  ]
}


const bio = {
  'fr': [
    `Bonjour ! Je m'appelle ${USER}, je suis un développeur polyvalent.
    Fort d’une solide formation en informatique et animé par une curiosité constante, 
    je conçois des systèmes informatiques performants, sécurisés et centrés sur l’utilisateur, 
    aussi bien pour le web, le desktop, le mobile que pour les systèmes embarqués et distribués.`,

    `Mon objectif est de transformer des idées complexes en solutions simples, robustes et efficaces.
    Je veille à ce que chaque projet soit optimisé pour répondre aux besoins spécifiques des utilisateurs, tout en garantissant une expérience fluide et intuitive.
    Mon approche repose sur une compréhension approfondie des enjeux et objectifs du client, afin de livrer un produit à la fois performant, fiable et facile à utiliser.
    `
  ],
  'en': [
    `Hi! My name is Saïd El Amani, and i’m a versatile Developer.
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



