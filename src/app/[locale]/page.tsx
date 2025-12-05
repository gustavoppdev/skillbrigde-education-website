import { Benefits } from "@/components/sections/Benefits";
import { Hero } from "@/components/sections/Hero";
import { OurCourses } from "@/components/sections/OurCourses";
import VideoSection from "@/components/sections/VideoSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <VideoSection />
      <Benefits />
      <OurCourses />
    </main>
  );
};

export default Home;
