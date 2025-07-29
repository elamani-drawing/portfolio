import { Card, CardHeader } from "@/components/ui/card";
import Navigation from "@/components/layout/home/navigation";
import { Smartphone, Code, Gamepad2, Database } from 'lucide-react'
import { SkillCard } from "./skill-card";

export default function MainContainer() {
    return (
        <Card className="p-0">
            <CardHeader className="relative flex flex-col p-0 pl-5">
                <div className="relative flex pl-0 w-full">
                    <h1 className="text-3xl font-bold pl-0 pt-5 pb-5">Mon Profil</h1>
                    <div className="hidden md:flex justify-end md:absolute md:w-3/4 lg:w-2/4 top-0 right-0 bg-gray-200 dark:bg-[#282829]  border-l border-b border-none dark:border-black rounded-bl-[250px] rounded-tr-[65px] shadow-md p-2">
                        <Navigation />
                    </div>
                </div>
                <div className="w-16 h-1 bg-[var(--main-color)] dark:bg-[var(--main-color)] mb-6"></div>
            </CardHeader>
            <div className="p-5 pt-0">
                <div className="mb-8">
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae dolores voluptas corporis dolore harum eos, ratione est repellendus ut sint cumque nisi tempore magni maiores nulla illo quae provident.
                    </p>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.</p>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed quod eveniet. Iusto, dolor! Accusantium debitis velit sed possimus laudantium dolores tenetur doloremque voluptatum sunt perspiciatis? Facere pariatur distinctio enim.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ut officiis illo nam repellat quo temporibus perspiciatis totam harum odio deleniti neque in tempora omnis, nulla incidunt explicabo inventore et.
                    </p>
                </div>
                <div>

                    <h2 className="text-3xl font-bold mb-6">Ce Que Je Fais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillCard
                            icon={
                                <Smartphone
                                    className="text-[var(--main-color)] dark:text-[var(--main-color)]"
                                    size={28}
                                />
                            }
                            title="Développement D'Applications"
                            description="Développement d'applications en Java et C#, en mettant l'accent sur la robustesse, la maintenabilité et une excellente expérience utilisateur."
                        />
                        <SkillCard
                            icon={
                                <Code className="text-[var(--main-color)] dark:text-[var(--main-color)]" size={28} />
                            }
                            title="Développement Web"
                            description="Création de sites web performants et adaptés aux besoins des utilisateurs, avec une attention particulière à l'optimisation et à l'ergonomie."
                        />
                        <SkillCard
                            icon={
                                <Gamepad2
                                    className="text-[var(--main-color)] dark:text-[var(--main-color)]"
                                    size={28}
                                />
                            }
                            title="Développement De Jeux Vidéo"
                            description="Conception et développement de jeux interactifs avec Unity, en combinant créativité et technologies avancées."
                        />
                        <SkillCard
                            icon={
                                <Database
                                    className="text-[var(--main-color)] dark:text-[var(--main-color)]"
                                    size={28}
                                />
                            }
                            title="Gestion De Bases De Données (SGBD)"
                            description="Conception, gestion et optimisation de bases de données, principalement SQL et NoSQL."
                        />
                    </div>
                </div>
            </div>

        </Card>
    );
}