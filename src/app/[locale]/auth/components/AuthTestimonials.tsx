// Next-Intl
import { useTranslations } from "next-intl";

// Components
import TestimonialCard from "@/components/common/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Constants
import { TestimonialsArray } from "@/constants";

const AuthTestimonials = () => {
  const t = useTranslations("Sections.AuthTestimonials");
  return (
    <div className="space-y-10 lg:space-y-15">
      <div className="space-y-2 lg:space-y-3">
        <h2 className="font-medium text-2xl lg:text-3xl">{t("headline")}</h2>
        <p className="text-app-grey-35 text-sm lg:text-base">
          {t("description")}
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {TestimonialsArray.map((testimony) => (
            <CarouselItem key={testimony.author}>
              <TestimonialCard testimony={testimony} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center sm:justify-end gap-2 mt-5">
          <CarouselPrevious className="static translate-y-0 bg-white rounded-md  size-10" />
          <CarouselNext className="static translate-y-0 bg-white rounded-md  size-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default AuthTestimonials;
