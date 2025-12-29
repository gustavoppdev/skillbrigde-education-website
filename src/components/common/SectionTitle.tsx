// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

type Props = {
  translationNamespace: string;
  viewMore?: boolean;
  viewMoreUrl?: string;
  children?: React.ReactNode;
};

const SectionTitle = ({
  translationNamespace,
  viewMoreUrl,
  viewMore,
  children,
}: Props) => {
  const t = useTranslations(translationNamespace);
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
        {t("headline")}
      </h2>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-10 md:gap-15 lg:gap-20 xl:gap-25 2xl:gap-35">
        <p className="text-sm md:text-base xl:text-lg">{t("description")}</p>
        {viewMore && (
          <Button variant={"outline"} asChild>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link href={viewMoreUrl ?? ("#" as any)}>{t("viewAllBtn")}</Link>
          </Button>
        )}
        {children}
      </div>
    </div>
  );
};

export default SectionTitle;
