// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Assets
import { shapeAboutCTA } from "@/assets";

const AboutCTA = () => {
  const t = useTranslations("Sections.AboutCTA");
  return (
    <section className="mt-12.5 lg:mt-15 bg-white rounded-lg p-7.5 lg:p-15 flex justify-between items-center flex-wrap gap-10 relative overflow-hidden hover:-translate-y-2 hover:shadow-xs transition-all duration-300 cursor-pointer">
      <div className="absolute right-0 -bottom-16 md:-bottom-4 lg:right-18 lg:-bottom-5 xl:-bottom-16 2xl:right-44 w-[190px] h-[190px] lg:w-[362px] lg:h-[362px] z-0 pointer-events-none">
        <Image
          src={shapeAboutCTA}
          alt=""
          sizes="(max-width: 1024px) 190px, 362px"
          fill
          className="object-contain"
        />
      </div>
      <div className="space-y-2.5 lg:space-y-3 max-w-3xl z-10">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          {t.rich("headline", {
            emphasis: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </h2>
        <p className="text-app-grey-35 text-sm lg:text-base">
          {t("description")}
        </p>
      </div>

      <Button className="h-fit z-10">{t("joinNowBtn")}</Button>
    </section>
  );
};

export default AboutCTA;
