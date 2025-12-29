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
    <li
      className={`rounded-2xl bg-white p-7.5 flex flex-col gap-8 lg:gap-10 items-end hover:shadow-xl transition-all cursor-pointer duration-300 ${
        benefit.index === "05" || benefit.index === "06" ? "hidden lg:flex" : ""
      }`}
    >
      <span className="font-bold text-5xl">{benefit.index}</span>
      <div className="space-y-2.5 grow">
        <h3 className="font-semibold text-xl">{t(benefit.title)}</h3>
        <p className="text-sm md:text-base">{t(benefit.description)}</p>
      </div>

      <Button variant={"secondary"} aria-label={t("accessBtn")}>
        <ArrowRight className="size-6.5 text-primary -rotate-45 " />
      </Button>
    </li>
  );
};

export default BenefitCard;
