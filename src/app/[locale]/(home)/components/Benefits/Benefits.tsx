// Components
import SectionTitle from "@/components/common/SectionTitle";
import BenefitCard from "./BenefitCard";

// Constants
import { benefits } from "@/constants";

export const Benefits = () => {
  return (
    <section className="section-container mt-15 lg:mt-25 2xl:mt-37.5">
      <SectionTitle translationNamespace="Sections.Benefits" viewMore={true} />

      <ul className="mt-10 lg:mt-15 2xl:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.index} benefit={benefit} />
        ))}
      </ul>
    </section>
  );
};
