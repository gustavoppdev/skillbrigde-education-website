// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

type Props = {
  translationNamespace: string;
  viewMore?: boolean;
  viewMoreUrl?: string;
};

const SectionTitle = ({
  translationNamespace,
  viewMoreUrl,
  viewMore,
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
          <Link href={viewMoreUrl ?? "#"} passHref>
            <Button variant={"outline"}>{t("viewAllBtn")}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
