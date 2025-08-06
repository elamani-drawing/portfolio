import { langAvailable } from "@/lib/constant";

export const data = {
    'experiences': {
        'fr': [
            {
                title: 'Stage en développement web',
                subTitle: 'Ambin Informatique - Tours',
                year: 'avril 2023 - juillet 2023',
                descriptions: [
                    "Réalisation d’une plateforme web permettant d’intégrer, mettre à jour et gérer leur applications métier ATYL Médical et Mode d’accueil.",
                    `Développement sur technologie PHP/Symfony/MySQL et Angular-Cli avec la
                    conception de portail, gestion des clients, gestion des applications (GIT,
                    version...), gestion de contenu « CMS », de documentation pour les clients,
                    d'un portail client pour obtenir des documents et d'une API.`,
                ],
            },
            {
                title: 'Lithophanes et cartes de profondeur en impression 3D',
                subTitle: 'Enseignant Bordeaux',
                year: 'Jun 2021 - Jul 202',
                descriptions: [
                    `Réalisation d'une application Python visant à convertir une photographie
                        numérique en un modèle 3D de lithophane, avec des fonctionnalités
                        avancées de traitement d'image ainsi que de génération, de visualisation et
                        d'exportation de structure 3D.
                    `
                ],
            },
        ],
        'en': [
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
    },
    'schooling': {
        'fr': [
            {
                title: 'Master 2 Cyber-Défense et Sécurité de l’Information ',
                subTitle: 'INSA Haut-de-france',
                year: 'Depuis septembre 2025',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ],
            },
            {
                title: 'Master 1 Cyber-Défense et Sécurité de l’Information ',
                subTitle: 'INSA Haut-de-france',
                year: 'septembre 2024 - aout 2025',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ],
            },
            {
                title: 'Master 1 Informatique',
                subTitle: 'Collège Sciences et Technologies - Université de Bordeaux',
                year: 'septembre 2023 - aout 2024',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ],
            },
            {
                title: 'Licence Informatique',
                subTitle: 'Université François Rabelais de Tours - Blois',
                year: 'septembre 2020 - aout 2023',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ],
            },
            {
                title: 'Baccalauréat scientifique',
                subTitle: 'Lycée polyvalent de Petite-Terre - Pamandzi, Mayotte',
                year: 'septembre 2020 - aout 2023',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ],
            },
        ],
        'en': [
            {
                title: 'Schooling IOS Developer',
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
    }
}

export function GetExperiences(lang: string) {
    let d = data.experiences[lang as langAvailable];
    if (!!!d) return data.experiences.en;
    return d;
}
export function GetSchooling(lang: string) {
    let d = data.schooling[lang as langAvailable];
    if (!!!d) return data.schooling.en;
    return d;
}

