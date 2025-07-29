import MainContainer from "@/components/layout/home/main-container";
import ProfileCard from "@/components/layout/home/profile-card";
import Navigation from "@/components/layout/home/navigation";

export default function Home() {
  return (
    <div>
      <div className="md:hidden mb-5 flex items-center justify-center w-full bg-gray-200 dark:bg-[#282829] pt-2 pb-2 rounded-bl-2xl rounded-br-2xl">
        <Navigation />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <ProfileCard />
        <div className="w-full md:w-3/4 relative">
          <MainContainer />
        </div>
      </div>
    </div>
  );
}
