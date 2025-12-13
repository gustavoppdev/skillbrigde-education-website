// Components
import CTA from "./CTA";
import Logos from "./Logos";

export const Hero = () => {
  return (
    <section className="section-container min-h-[calc(100dvh-182px)] sm:min-h-[calc(100dvh-162px)] lg:min-h-[calc(100dvh-152px)] 2xl:min-h-[calc(100dvh-168px)] grid place-content-center">
      {/* CTA */}
      <CTA />

      {/* Logos */}
      <Logos />
    </section>
  );
};
