"use client";

// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Constants & Assets
import { footerSocialProfiles, navigationLinks } from "@/constants";
import { logo, menuIcon } from "@/assets";

// Hooks
import { useAuth } from "@/context/AuthContext";

// Icons
import { Loader2, LogOut } from "lucide-react";

const NavbarMobile = () => {
  const t = useTranslations("Layout.Navbar");
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="px-3.5 sm:px-5">
            <Image src={menuIcon} alt="Menu" width={28} height={28} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only">{t("Alt.menuTitle")}</SheetTitle>
            <SheetDescription className="sr-only">
              {t("Alt.menuDescription")}
            </SheetDescription>
            <Link href={"/"} className="relative">
              <Image src={logo} alt="Skillbridge Logo" className="size-8" />
            </Link>
          </SheetHeader>

          <ul className="space-y-2 px-4">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <SheetClose asChild>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start px-0"
                    asChild
                  >
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <Link href={link.href as any}>{t(link.label)}</Link>
                  </Button>
                </SheetClose>
              </li>
            ))}
          </ul>

          <SheetFooter className="space-y-4">
            <div className="flex flex-col gap-3">
              {isAuthenticated ? (
                <>
                  <div className="py-2">
                    <p className="text-xs text-app-grey-35">{t("welcome")}</p>
                    <p className="text-sm font-medium">{user?.fullName}</p>
                  </div>
                  <Button
                    className="w-full gap-2"
                    onClick={() => {
                      logout();
                    }}
                  >
                    {isLoading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <>
                        <LogOut className="size-4" />
                        {t("logout")}
                      </>
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/auth/sign-in">{t("loginBtn")}</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/auth/sign-up">{t("signUpBtn")}</Link>
                    </Button>
                  </SheetClose>
                </>
              )}
            </div>

            <ul className="flex justify-between items-center ">
              {footerSocialProfiles.map((profile) => (
                <li key={profile.alt}>
                  <Button variant="outline">
                    <Image
                      src={profile.icon}
                      alt={profile.alt}
                      width={20}
                      height={20}
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
