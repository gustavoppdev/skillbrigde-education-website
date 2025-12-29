// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import { Button } from "@/components/ui/button";

// Assets & Lucide Icons
import { abstractLineHero } from "@/assets";
import { Zap } from "lucide-react";

const CTA = () => {
  const t = useTranslations("Sections.Hero");

  return (
    <div className="flex flex-col items-center text-center mt-12.5 lg:mt-20">
      {/* Destaque */}
      <div className="relative mb-4 2xl:mb-6 rounded-[8px] bg-white p-4 flex items-center gap-2.5">
        <span className="bg-app-primary-95 p-3 rounded-[6px]">
          <Zap className="size-6 text-black fill-black" />
        </span>
        <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-balance">
          {t.rich("headline", {
            emphasis: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </h1>

        {/* Linha Abstrata */}
        <div className="w-[39px] h-[43px] absolute -top-3 -left-3 md:-top-8 md:-left-8">
          <Image src={abstractLineHero} priority fill sizes="39px" alt="" />
        </div>
      </div>

      {/* Texto */}
      <div className="space-y-3">
        <p className="font-medium text-2xl md:text-3xl 2xl:text-4xl">
          {t("subHeadline")}
        </p>
        <p className="text-sm md:text-base 2xl:text-lg">{t("description")}</p>
      </div>

      {/* Botões */}
      <div className="mt-12.5 2xl:mt-15 flex gap-3">
        <Button size={"lg"} className="font-semibold lg:text-base" asChild>
          <Link href={"/courses"}>{t("exploreCoursesBtn")}</Link>
        </Button>
        <Button
          size={"lg"}
          variant={"outline"}
          className="lg:text-base"
          asChild
        >
          <Link href={"/pricing"}>{t("viewPricingBtn")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CTA;
