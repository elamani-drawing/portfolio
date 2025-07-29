import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function Navigation() {
    const cn = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
    return (
        <div className=" flex h-full">
            <div className="mr-2"><ThemeToggle /></div>
            <nav className="p-2 px-4">
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="#about"
                            className="text-[var(--main-color)] dark:text-[var(--main-color)] hover:text-[var(--main-color)] dark:hover:text-yellow-400"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            className={cn}
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={cn}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={cn}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}