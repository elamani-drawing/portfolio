import ProfileCard from "@/components/layout/home/ProfileCard";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full">
        <ProfileCard />
      <div className="w-full md:w-3/4 p-4 relative">
      <ThemeToggle />
      Navigation
        {/* <Navigation /> */}
        {/* <MainContent /> */}
      </div>
    </div>
  );
}
