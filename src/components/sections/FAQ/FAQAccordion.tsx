// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Constants & Lucide Icons
import { FAQArray } from "@/constants";
import { ArrowRight } from "lucide-react";

const FAQAccordion = () => {
  const t = useTranslations("Pages.Home.FAQ");
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-5 lg:gap-y-7.5 "
      defaultValue="item-0"
    >
      {FAQArray.map((item, index) => (
        <AccordionItem
          value={`item-${index}`}
          key={item.question}
          className="p-6 rounded-[10px] border border-app-white-95"
        >
          <AccordionTrigger className="font-medium text-base">
            {t(item.question)}
          </AccordionTrigger>
          <AccordionContent className="font-normal text-sm lg:text-base text-app-grey-30 space-y-5 lg:space-y-10 pt-6 border-t">
            <p>{t(item.answer)}</p>
            {item.ctaAnswer && (
              <Link href={"#"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="w-full justify-between whitespace-normal  text-left"
                >
                  {t(item.ctaAnswer)}
                  <ArrowRight className="size-9 p-2 bg-white rounded-full" />
                </Button>
              </Link>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
