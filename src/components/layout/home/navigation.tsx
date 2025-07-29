import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function Navigation() {
    return ( 
        <div className=" flex h-full">
            <div className="mr-2"><ThemeToggle/></div>
            <nav className="p-2 px-4">
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="#about"
                            className="text-yellow-600 dark:text-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-400"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}