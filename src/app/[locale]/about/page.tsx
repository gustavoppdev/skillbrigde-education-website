// Components
import PageTitle from "@/components/common/PageTitle";
import AboutSection from "./components/AboutSection";
import AboutCTA from "./components/AboutCTA";

// Constants
import { aboutPageContent } from "@/constants";

const AboutPage = () => {
  return (
    <main className="section-container">
      <PageTitle translationNamespace="Pages.About" />

      <div className="flex flex-col gap-12.5 lg:gap-25 mt-12.5 lg:mt-20">
        {aboutPageContent.map((section) => (
          <AboutSection key={section.title} section={section} />
        ))}
      </div>

      <AboutCTA />
    </main>
  );
};

export default AboutPage;
