import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useI18n } from "@/locales/client";


let navItems = [
    { langCode: "navigationBar.about", id: "about" },
    { langCode: "navigationBar.resume", id: "resume" },
    { langCode: "navigationBar.projects", id: "projects" },
    { langCode: "navigationBar.contact", id: "contact" },
];

export type NavItems = typeof navItems[number]["id"];

export function isNavItem(value: string): value is NavItems {
  return navItems.some(item => item.id === value);
}


export type NavigationProps = {
    onSelect: (section: string) => void;
    activeSection: NavItems;
};

export default function Navigation({ onSelect, activeSection }: NavigationProps) {
    const cn = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
    const cnActive = "text-[var(--main-color)] dark:text-[var(--main-color)] hover:text-[var(--main-color)] dark:hover:text-yellow-400";

    const handleClick = (section: string) => (e: React.MouseEvent) => {
        console.log(section)
        if (section.toLocaleLowerCase() === activeSection.toLocaleLowerCase()) { return; } // if the section is already active, do nothing
        e.preventDefault(); // block default navigation behavior
        onSelect(section); // call the onSelect function with the section name
    };

    const t = useI18n();

    return (
        <div className=" flex h-full">
            <div className="mr-2"><ThemeToggle /></div>
            <nav className="p-2 px-4">
                <ul className="flex space-x-6">
                    {navItems.map(({ langCode, id }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={handleClick(id)}
                                className={activeSection === id ? cnActive : cn}
                            >
                                {t(langCode as any, {})}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}