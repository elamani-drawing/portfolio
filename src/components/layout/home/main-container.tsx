import { Card, CardHeader } from "@/components/ui/card";
import Navigation, { NavigationProps } from "@/components/layout/home/navigation";
import HomeContent from "@/components/layout/home/home-content";
import ResumeContent from "@/components/layout/home/resume-content";
import ProjectContent from "./project-content";
import { Contact } from "lucide-react";
import { ContactContent } from "./contact-content";

function renderSection(section: string) {
  switch (section.toLocaleLowerCase()) {
    // case "about":
    //   return <HomeContent />; 
    case "resume":
      return <ResumeContent />;
    case "projects":
      return <ProjectContent />;
    case "contact":
      return <ContactContent />;
    default:
      return <HomeContent />;
  }
}
  const getTitle = (section: string) => {
    switch (section) {
    //   case "about":
    //     return "Mon Profil";
      case "resume":
        return "Mon CV";
      case "projects":
        return "Mes Projets";
      case "contact":
        return "Contact";
      default:
        return "Mon Profil";
    }
  };

export default function MainContainer({ onSelect, activeSection }: NavigationProps) {
    return (
        <Card className="p-0">
            <CardHeader className="relative flex flex-col p-0 pl-5">
                <div className="relative flex pl-0 w-full">
                    <h1 className="text-3xl font-bold pl-0 pt-5 pb-5">{getTitle(activeSection)}</h1>
                    <div className="hidden md:flex justify-end md:absolute md:w-3/4 lg:w-2/4 top-0 right-0 bg-gray-200 dark:bg-[#282829]  border-l border-b border-none dark:border-black rounded-bl-[250px] rounded-tr-[65px] shadow-md p-2">
                        <Navigation onSelect={onSelect} activeSection={activeSection} />
                    </div>
                </div>
                <div className="w-16 h-1 bg-[var(--main-color)] dark:bg-[var(--main-color)] mb-6"></div>
            </CardHeader>
            <div className="p-5 pt-0" >
                {renderSection(activeSection)}
            </div>
        </Card>
    );
}