import MainContainer from "@/components/layout/home/main-container";
import ProfileCard from "@/components/layout/home/profile-card";
import Navigation from "@/components/layout/home/navigation";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 md:hidden mb-5 flex items-center justify-center w-full bg-gray-200 dark:bg-[#282829] pt-2 pb-2 rounded-bl-2xl rounded-br-2xl">
        <Navigation />
      </div>
      <div className="flex flex-col items-start md:flex-row w-full gap-10">
        <div className="md:w-1/4 w-full">
          <ProfileCard />
        </div>
        <div className="w-full md:w-3/4 relative mb-5">
          <MainContainer />
        </div>
      </div>
    </div>
  );
}
