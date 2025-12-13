// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Types & Lucide Icons
import { Benefit } from "@/types";
import { ArrowRight } from "lucide-react";

type Props = {
  benefit: Benefit;
};
const BenefitCard = ({ benefit }: Props) => {
  const t = useTranslations("Sections.Benefits.benefits");
  return (
    <div
      className={`rounded-2xl bg-white  p-7.5 lg:p-10 flex flex-col gap-8 lg:gap-10 items-end hover:shadow-xl transition-all cursor-pointer duration-300 ${
        benefit.index === "05" || benefit.index === "06" ? "hidden lg:flex" : ""
      }`}
    >
      <span className="font-bold text-5xl lg:text-6xl 2xl:text-7xl">
        {benefit.index}
      </span>
      <div className="space-y-2.5 grow">
        <h3 className="font-semibold text-xl lg:text-2xl">
          {t(benefit.title)}
        </h3>
        <p className="text-sm md:text-base lg:text-lg">
          {t(benefit.description)}
        </p>
      </div>

      <Button variant={"outline"} className="bg-app-white-99">
        <ArrowRight className="size-6.5 text-primary -rotate-45 border-app-white-95" />
      </Button>
    </div>
  );
};

export default BenefitCard;
