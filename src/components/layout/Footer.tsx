// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Constants
import {
  FooterContactList,
  footerNavigationLinks,
  footerSocialProfiles,
} from "@/constants";

// Assets
import { logo } from "@/assets";

const Footer = () => {
  const t = useTranslations("Layout.Footer");

  return (
    <footer className="bg-white py-6 lg:pt-20 mt-15 lg:mt-25 2xl:mt-37.5">
      <div className="section-container">
        {/* Logo Link */}
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Skillbridge Logo"
            className="size-10 lg:size-11 min-w-10"
            width={44}
            height={44}
          />
        </Link>
        {/* Conteúdo do Rodapé */}
        <div className="mt-6 flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Informações de Contato */}
          <ul className="flex flex-col gap-3">
            {FooterContactList.map((item) => (
              <li key={item.label}>
                <Button
                  variant={"link"}
                  size={"sm"}
                  className="text-foreground justify-between gap-2 pl-0 font-normal"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    className="size-5"
                    width={20}
                    height={20}
                  />

                  {t(item.label)}
                </Button>
              </li>
            ))}
          </ul>

          {/* Navegação e Redes Sociais */}
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {/* Links de Navegação */}
            {footerNavigationLinks.map((group) => (
              <div key={group.title}>
                {/* Título do Grupo de Links */}
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Link href={group.titleHref as any} passHref>
                  <Button
                    variant={"link"}
                    size={"sm"}
                    className="text-foreground pl-0 mb-2"
                  >
                    {t(group.title)}
                  </Button>
                </Link>

                {/* Lista de Links do Grupo */}
                <ul className="flex flex-col gap-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <Link href={link.href as any} passHref>
                        <Button
                          variant={"link"}
                          size={"sm"}
                          className="text-app-grey-35 pl-0 font-normal"
                        >
                          {t(link.label)}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Redes Sociais */}
            <div className="">
              <Link href={"/contact"} passHref>
                <Button
                  variant={"link"}
                  size={"sm"}
                  className="text-foreground pl-0 mb-2"
                >
                  {t("socialProfiles")}
                </Button>
              </Link>

              <ul className="flex gap-2">
                {footerSocialProfiles.map((profile) => (
                  <li key={profile.alt}>
                    <Button variant={"outline"} size={"icon-lg"}>
                      <Image
                        src={profile.icon}
                        alt={profile.alt}
                        className="size-5"
                        width={20}
                        height={20}
                      />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <p className="p-6 mt-10 border-t text-sm text-center text-app-grey-35">
          {t("copyright", { date: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
