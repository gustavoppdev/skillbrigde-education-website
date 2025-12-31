"use client";

// Next.js & Next-Intl
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";

// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Lucide Icons & Assets
import { Languages } from "lucide-react";
import { useTransition } from "react";

type Props = {
  withIcon?: boolean;
  desktop?: boolean;
};

export default function LanguageSwitcher({
  withIcon = false,
  desktop = false,
}: Props) {
  const t = useTranslations("Others.LanguageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition(); // Hook de transição

  const handleLocaleChange = (newLocale: "pt" | "en") => {
    startTransition(() => {
      router.replace(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        { pathname, params },
        { locale: newLocale }
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label={t("changeLanguage")}
          className={`cursor-pointer w-fit gap-2 pl-1! bg-transparent hover:bg-transparent hover:text-custom-primary text-foreground text-custom-body-2`}
        >
          {withIcon && <Languages className="h-[1.2rem] w-[1.2rem] mr-2" />}
          {desktop ? (
            <>
              <Languages className="h-[1.2rem] w-[1.2rem] mr-2" />
              <span className="hidden xl:block">{t("changeLanguage")}</span>
            </>
          ) : (
            t("changeLanguage")
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLocaleChange("pt")}
          disabled={locale === "pt" || isPending}
        >
          {t("portuguese")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange("en")}
          disabled={locale === "en" || isPending}
        >
          {t("english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
