// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Lucide Icons
import { ArrowRight } from "lucide-react";

const Topbar = () => {
  const t = useTranslations("Layout.Topbar");
  return (
    <Link
      href={"/courses"}
      target="_blank"
      className="py-2.5 px-4 m-4 2xl:mx-7.5 text-center flex justify-center items-center gap-4 text-sm 2xl:text-base bg-primary rounded-[8px] text-white text-balance"
    >
      {t("paragraph")}
      <ArrowRight className="size-5 min-w-5" />
    </Link>
  );
};

export default Topbar;
