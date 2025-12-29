// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import Topbar from "../Topbar";
import NavbarMobile from "./NavbarMobile";
import { Button } from "@/components/ui/button";

// Assets & Constants
import { logo } from "@/assets";
import { navigationLinks } from "@/constants";

// Hooks
import { AuthActions } from "./AuthActions";

export const Navbar = () => {
  const t = useTranslations("Layout.Navbar");

  return (
    <header>
      <Topbar />

      <nav className="section-container py-4 lg:pb-5 lg:px-15 2xl:px-33 flex justify-between items-center">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="relative sm:mr-15">
            <Image
              src={logo}
              alt="Skillbridge Logo"
              className="size-10 lg:size-11 2xl:size-14 min-w-10"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-2 xl:gap-5">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Button variant={"ghost"} asChild>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Link href={link.href as any}>{t(link.label)}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-1 sm:gap-5">
          <AuthActions />
          <NavbarMobile />
        </div>
      </nav>
    </header>
  );
};
