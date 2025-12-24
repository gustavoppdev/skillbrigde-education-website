"use client";

// React
import { useState } from "react";

// Components
import SectionTitle from "@/components/common/SectionTitle";
import PricingCard from "./PricingCard";

// Constants & Types
import { PricingPlans } from "@/constants";
import { BillingFrequency } from "@/types";
import TogglePricingBtn from "@/components/common/TogglePricingBtn";

type Props = {
  layout: "section" | "page";
};

export const Pricing = ({ layout }: Props) => {
  const [billingFrequency, setBillingFrequency] =
    useState<BillingFrequency>("monthly");

  const handleBillingFrequencySelect = (plan: BillingFrequency) => {
    setBillingFrequency(plan);
  };

  return (
    <section
      className={`section-container ${
        layout === "section" ? "mt-15 lg:mt-25 2xl:mt-37.5" : ""
      }`}
    >
      {layout === "section" ? (
        <SectionTitle translationNamespace="Sections.Pricing">
          <TogglePricingBtn
            billingFrequency={billingFrequency}
            handleBillingFrequencySelect={handleBillingFrequencySelect}
          />
        </SectionTitle>
      ) : (
        <TogglePricingBtn
          billingFrequency={billingFrequency}
          handleBillingFrequencySelect={handleBillingFrequencySelect}
          styles={layout === "page" ? "sm:mx-auto" : ""}
        />
      )}

      <ul className="mt-10 lg:mt-15 2xl:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-7.5 rounded-[12px] bg-white p-5 lg:p-12.5 ">
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
