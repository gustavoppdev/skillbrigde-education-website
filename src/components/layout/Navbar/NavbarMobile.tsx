// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Constants & Assets
import { navigationLinks } from "@/constants";
import { menuIcon } from "@/assets";

const NavbarMobile = () => {
  const t = useTranslations("Layout.Navbar");
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"}>
            <Image src={menuIcon} alt="Menu" width={34} height={34} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only" aria-label={t("Alt.menuTitle")} />
            <SheetDescription
              className="sr-only"
              aria-label={t("Alt.menuDescription")}
            />
          </SheetHeader>

          <ul className="space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} passHref>
                  <Button variant={"ghost"}>{t(link.label)}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
