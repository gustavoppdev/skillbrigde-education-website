// Next-Intl
import { useTranslations } from "next-intl";

// Components & Types
import { Button } from "../ui/button";
import { BillingFrequency } from "@/types";

type Props = {
  billingFrequency: BillingFrequency;
  handleBillingFrequencySelect: (plan: BillingFrequency) => void;
  styles?: string;
};

const TogglePricingBtn = ({
  billingFrequency,
  handleBillingFrequencySelect,
  styles,
}: Props) => {
  const t = useTranslations("Sections.Pricing");

  return (
    <div
      className={`flex items-center rounded-lg gap-2 p-3 bg-white w-fit mx-auto sm:mx-0 ${styles}`}
    >
      <Button
        className={
          billingFrequency === "monthly"
            ? "bg-primary text-primary-foreground"
            : "bg-white hover:bg-app-white-97 text-foreground"
        }
        onClick={() => handleBillingFrequencySelect("monthly")}
      >
        {t("billingFrequency.monthly")}
      </Button>
      <Button
        className={
          billingFrequency === "yearly"
            ? "bg-primary text-primary-foreground"
            : "bg-white hover:bg-app-white-97 text-foreground"
        }
        onClick={() => handleBillingFrequencySelect("yearly")}
      >
        {t("billingFrequency.yearly")}
      </Button>
    </div>
  );
};

export default TogglePricingBtn;
