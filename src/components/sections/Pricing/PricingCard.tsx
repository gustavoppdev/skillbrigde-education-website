// Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import { Button } from "@/components/ui/button";

// Types & Lucide Icons
import { BillingFrequency, Plan } from "@/types";
import { Check, X } from "lucide-react";

type Props = {
  plan: Plan;
  selectedPaymentFrequency: BillingFrequency;
  handleBillingFrequencySelect: (plan: BillingFrequency) => void;
};

const PricingCard = ({ plan, selectedPaymentFrequency }: Props) => {
  const t = useTranslations("Sections.Pricing");

  const billingFrequency: BillingFrequency =
    selectedPaymentFrequency === "monthly" ? "monthly" : "yearly";

  return (
    <div className="rounded-[12px] py-7.5 px-5 lg:py-10 lg:px-6 bg-app-white-99 border  flex flex-col items-center text-center gap-7.5 lg:gap-12.5 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01]">
      {/* Plan Title */}
      <h3 className="py-2 lg:py-2.5 px-5.5 lg:text-lg bg-app-primary-90 rounded-sm w-full font-medium">
        {t(plan.title)}
      </h3>

      {/* Plan Price */}
      <h4 className="font-semibold text-5xl lg:text-6xl">
        {t(plan.price[billingFrequency])}
        <span className="font-medium text-sm lg:text-base">
          /{t(`billingFrequency.${billingFrequency}`).toLowerCase()}
        </span>
      </h4>

      {/* Features */}

      <div className=" bg-white rounded-lg space-y-5 border ">
        <h5 className="font-medium text-lg lg:text-xl p-5 lg:p-7.5">
          {t("availableFeatures")}
        </h5>

        <ul className="flex flex-col gap-5 text-left p-5 lg:p-7.5">
          {plan.features.map((feature) => (
            <li
              key={feature.title}
              className="p-3 rounded-lg border  flex items-center gap-4 transition-colors duration-200 hover:border-primary"
            >
              {feature.available ? (
                <Check className="size-8 min-w-8 p-2 bg-app-primary-90 text-foreground rounded" />
              ) : (
                <X className="size-8 min-w-8 p-2 text-foreground border  rounded" />
              )}
              <p>{t(feature.title)}</p>
            </li>
          ))}
        </ul>

        <Link href={"/pricing"} passHref>
          <Button className="w-full m-0 rounded-t-none" size={"lg"}>
            {t("getStartedBtn")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
