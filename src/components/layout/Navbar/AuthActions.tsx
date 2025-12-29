"use client";

// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Context
import { useAuth } from "@/context/AuthContext";

// Icons
import { Loader2, LogOut, User2 } from "lucide-react";

export const AuthActions = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const t = useTranslations("Layout.Navbar");

  const formatUserName = (fullName?: string) => {
    if (!fullName) return "";

    const names = fullName.trim().split(/\s+/); // Divide por qualquer espaço em branco

    // Se tiver apenas um nome, retorna ele.
    // Se tiver dois ou mais, pega os dois primeiros.
    return names.length > 1 ? `${names[0]} ${names[1]}` : names[0];
  };

  if (isLoading)
    return (
      <div className="w-20">
        <Loader2 className="size-4 animate-spin" />
      </div>
    );

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end text-end">
          <span className="text-xs text-app-grey-35">{t("welcome")}</span>
          <span className="text-sm font-medium text-app-grey-15">
            {formatUserName(user.fullName)}
          </span>
        </div>

        <Button variant="outline" size="icon" className="rounded-full border">
          <User2 className="size-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={logout}
          title={t("logout")}
          className="hidden lg:flex"
        >
          <LogOut className="size-5 text-red-500" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 sm:gap-5">
      <Button variant="ghost" asChild className="px-3.5 sm:px-5">
        <Link href="/auth/sign-up">{t("signUpBtn")}</Link>
      </Button>
      <Button asChild className="px-3.5 sm:px-5">
        <Link href="/auth/sign-in">{t("loginBtn")}</Link>
      </Button>
    </div>
  );
};
