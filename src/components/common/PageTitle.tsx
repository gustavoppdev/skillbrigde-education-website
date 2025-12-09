import { useTranslations } from "next-intl";

type Props = {
  translationNamespace: string;
};

const PageTitle = ({ translationNamespace }: Props) => {
  const t = useTranslations(translationNamespace);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 mt-12.5 lg:mt-20 border-b pb-7.5 lg:pb-10 mb-12.5 lg:mb-20">
      <h1 className="font-semibold text-3xl lg:text-4xl">{t("headline")}</h1>
      <p className="text-sm text-app-grey-35 md:text-base">
        {t("description")}
      </p>
    </div>
  );
};

export default PageTitle;
