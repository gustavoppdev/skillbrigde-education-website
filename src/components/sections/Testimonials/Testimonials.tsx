import SectionTitle from "@/components/common/SectionTitle";
import { TestimonialsArray } from "@/constants";

import TestimonialCard from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="section-container mt-15 lg:mt-25 2xl:mt-37.5">
      <SectionTitle
        translationNamespace="Pages.Home.Testimonials"
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
