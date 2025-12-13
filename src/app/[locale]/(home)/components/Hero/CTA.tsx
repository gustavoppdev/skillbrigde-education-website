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
  const t = useTranslations("Pages.Home.Hero");

  return (
    <div className="flex flex-col items-center text-center">
      {/* Destaque */}
      <div className="relative mb-4 2xl:mb-6 rounded-[8px] bg-white p-4 flex items-center gap-2.5">
        <span className="bg-app-primary-95 p-3 rounded-[6px]">
          <Zap className="size-6 text-black fill-black" />
        </span>
        <h1 className="font-semibold md:text-4xl 2xl:text-5xl">
          {t.rich("headline", {
            emphasis: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </h1>

        {/* Linha Abstrata */}
        <div className="w-[39px] h-[43px] absolute -top-3 -left-3 md:-top-8 md:-left-8">
          <Image
            src={abstractLineHero}
            priority
            fill
            sizes="39px"
            alt="Abstract Line"
          />
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
        <Link href={"/courses"} passHref>
          <Button size={"lg"} className="font-semibold 2xl:text-lg">
            {t("exploreCoursesBtn")}
          </Button>
        </Link>
        <Link href={"/pricing"} passHref>
          <Button size={"lg"} variant={"secondary"} className="2xl:text-lg">
            {t("viewPricingBtn")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
