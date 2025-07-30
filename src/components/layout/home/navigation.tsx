import { ThemeToggle } from "@/components/layout/theme-toggle";

export type NavigationProps = {
  onSelect: (section: string) => void;
  activeSection: string;
};

export default function Navigation({ onSelect, activeSection }: NavigationProps) {
    const cn = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
    const cnActive = "text-[var(--main-color)] dark:text-[var(--main-color)] hover:text-[var(--main-color)] dark:hover:text-yellow-400";

    const handleClick = (section: string) => (e: React.MouseEvent) => { 
        if (section.toLocaleLowerCase() === activeSection.toLocaleLowerCase()) {return;} // if the section is already active, do nothing
        e.preventDefault(); // block default navigation behavior
        onSelect(section); // call the onSelect function with the section name
    };

    const navItems = [
        { label: "About", id: "about" },
        { label: "Resume", id: "resume" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <div className=" flex h-full">
            <div className="mr-2"><ThemeToggle /></div>
            <nav className="p-2 px-4">
                <ul className="flex space-x-6">
                    {navItems.map(({ label, id }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={handleClick(id)}
                                className={activeSection === id ? cnActive : cn}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}