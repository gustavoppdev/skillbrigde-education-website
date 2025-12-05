"use client";

// React
import { useState } from "react";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import SectionTitle from "@/components/common/SectionTitle";
import PricingCard from "./PricingCard";
import { Button } from "@/components/ui/button";

// Constants & Types
import { PricingPlans } from "@/constants";
import { BillingFrequency } from "@/types";

export const Pricing = () => {
  const t = useTranslations("Pages.Home.Pricing");
  const [billingFrequency, setBillingFrequency] =
    useState<BillingFrequency>("monthly");

  const handleBillingFrequencySelect = (plan: BillingFrequency) => {
    setBillingFrequency(plan);
  };

  return (
    <section className="section-container mt-15 lg:mt-25 2xl:mt-37.5">
      <SectionTitle translationNamespace="Pages.Home.Pricing">
        <div className="flex items-center rounded-lg gap-2 p-3 bg-white w-fit mx-auto sm:mx-0">
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
      </SectionTitle>
      <ul className="mt-10 lg:mt-15 2xl:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-7.5 rounded-[12px] bg-white p-5 lg:p-12.5">
        {PricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            plan={plan}
            selectedPaymentFrequency={billingFrequency}
            handleBillingFrequencySelect={handleBillingFrequencySelect}
          />
        ))}
      </ul>
    </section>
  );
};
