// Components
import PageTitle from "@/components/common/PageTitle";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";

const PricingPage = () => {
  return (
    <main className="section-container">
      <PageTitle translationNamespace="Pages.Pricing" />

      <Pricing layout="page" />

      <FAQ />
    </main>
  );
};

export default PricingPage;
