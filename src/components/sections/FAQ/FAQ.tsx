import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import FAQAccordion from "./FAQAccordion";

export const FAQ = () => {
  const t = useTranslations("Sections.FAQ");
  return (
    <section className="section-container bg-white rounded-[12px] py-6 lg:py-20 mt-15 lg:mt-25 2xl:mt-37.5 grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-4">
        <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
          {t("headline")}
        </h2>

        <p className="text-sm md:text-base xl:text-lg max-w-sm lg:max-w-none">
          {t("description")}
        </p>

        <Link href={"/faq"} passHref>
          <Button variant={"outline"}>{t("viewAllBtn")}</Button>
        </Link>
      </div>

      <FAQAccordion />
    </section>
  );
};
