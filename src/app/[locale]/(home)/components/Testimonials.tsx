// Components
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialCard from "@/components/common/TestimonialCard";

// Constants
import { TestimonialsArray } from "@/constants";

export const Testimonials = () => {
  return (
    <section className="section-container mt-15 lg:mt-25 2xl:mt-37.5">
      <SectionTitle
        translationNamespace="Sections.Testimonials"
        viewMore={true}
      />

      <div className="mt-10 lg:mt-15 2xl:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {TestimonialsArray.map((testimony) => (
          <TestimonialCard key={testimony.author} testimony={testimony} />
        ))}
      </div>
    </section>
  );
};
