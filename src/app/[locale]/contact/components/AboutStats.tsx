// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Constants
import { FooterContactList, footerSocialProfiles } from "@/constants";

type Props = {
  containerStyles?: string;
};

const cardStyles =
  "flex flex-col items-center bg-app-white-99 rounded-md p-7.5 gap-y-3.5 text-center border border-app-white-95 text-balance hover:shadow-sm transition-all duration-300 cursor-pointer hover:-translate-y-1";

const AboutStats = ({ containerStyles }: Props) => {
  const t = useTranslations("Layout.Footer");
  return (
    <ul
      className={`p-7.5 lg:p-15 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-5 lg:gap-6 ${containerStyles}`}
    >
      {FooterContactList.map((item) => (
        <li key={item.label} className={cardStyles}>
          <Button variant={"outline"}>
            <Image src={item.icon} alt={t(item.label)} width={20} height={20} />
          </Button>

          <p className="text-app-grey-30 text-sm lg:text-base">
            {t(item.label)}
          </p>
        </li>
      ))}
      <li className={cardStyles}>
        <div className="flex gap-2.5">
          {footerSocialProfiles.map((profile) => (
            <Button variant={"outline"} key={profile.alt}>
              <Image
                src={profile.icon}
                alt={profile.alt}
                width={20}
                height={20}
              />
            </Button>
          ))}
        </div>

        <p className="text-app-grey-30 text-sm lg:text-base">
          {t("socialProfiles")}
        </p>
      </li>
    </ul>
  );
};

export default AboutStats;
