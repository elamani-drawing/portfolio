import { langAvailable } from "@/lib/constant";

export const data = {
    'experiences': {
        'fr': [
            {
                title: 'Senior IOS Developer fr ',
                subTitle: 'Société XYZ',
                year: 'Aug 2022 - Current fr',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                ],
            },
            {
                title: 'IOS Developer fr',
                subTitle: 'Société XYZ',
                year: 'Jun 2021 - Jul 202',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
                title: 'Schooling IOS Developer fr ',
                subTitle: 'Société XYZ',
                year: 'Aug 2022 - Current fr',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                ],
            },
            {
                title: 'IOS Developer fr',
                subTitle: 'Société XYZ',
                year: 'Jun 2021 - Jul 202',
                descriptions: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

