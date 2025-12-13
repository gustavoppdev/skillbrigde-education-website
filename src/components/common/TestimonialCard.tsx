// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
// Types
import { Testimonial } from "@/types";

type Props = {
  testimony: Testimonial;
};
const TestimonialCard = ({ testimony }: Props) => {
  const t = useTranslations("Sections.Testimonials");
  return (
    <div className="rounded-[10px] border border-app-white-95 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <p className="p-7.5 text-app-grey-30 text-sm lg:text-base bg-white">
        {t(testimony.quote)}
      </p>

      <div className="flex  items-center justify-between gap-4 py-5 px-7.5 bg-app-white-99 border-t border-app-white-95">
        <div className="flex flex-wrap items-center gap-2.5">
          <Image
            src={testimony.avatar}
            alt={t(testimony.author)}
            width={50}
            height={50}
            placeholder="blur"
            blurDataURL={testimony.avatar.src}
            className="object-contain rounded-sm"
          />
          <p className="font-semibold text-sm">{t(testimony.author)}</p>
        </div>

        <Button variant={"outline"}>{t("readFullStoryBtn")}</Button>
      </div>
    </div>
  );
};

export default TestimonialCard;
