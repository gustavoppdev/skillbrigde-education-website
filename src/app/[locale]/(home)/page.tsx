import { Hero } from "@/app/[locale]/(home)/components/Hero";
import VideoSection from "@/app/[locale]/(home)/components/VideoSection";
import { Benefits } from "@/app/[locale]/(home)/components/Benefits";
import { OurCourses } from "@/app/[locale]/(home)/components/OurCourses";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";

const Home = () => {
  return (
    <main>
      <Hero />
      <VideoSection />
      <Benefits />
      <OurCourses />
      <Testimonials />
      <Pricing layout="section" />
      <FAQ />
    </main>
  );
};

export default Home;
