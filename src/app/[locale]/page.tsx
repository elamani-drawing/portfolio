"use client";
import MainContainer from "@/components/layout/home/main-container";
import ProfileCard from "@/components/layout/home/profile-card";
import { useRouter } from "next/navigation";
import Navigation from "@/components/layout/home/navigation";
import { UrlActiveSection } from "@/components/layout/home/active-section";
import { Suspense, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');
  const router = useRouter();
  const handleNavigationSelect = (section: string) => {
    setActiveSection(section);
    router.push(`?section=${section}`);
  }

  return (
    <div>
      <Suspense fallback={null}>
        <UrlActiveSection setActiveSection={setActiveSection} />
      </Suspense>
      <div className="fixed top-0 md:hidden mb-5 flex items-center justify-center w-full bg-gray-200 dark:bg-[#282829] pt-2 pb-2 rounded-bl-2xl rounded-br-2xl">
        <Navigation onSelect={handleNavigationSelect} activeSection={activeSection} />
      </div>
      <div className="flex flex-col items-start md:flex-row w-full gap-10">
        <div className="md:w-1/4 w-full">
          <ProfileCard />
        </div>
        <div className="w-full md:w-3/4 relative mb-5">
          {activeSection !== '' && (
            <MainContainer onSelect={handleNavigationSelect} activeSection={activeSection} />
          )}
        </div>
      </div>
    </div>
  );
}
