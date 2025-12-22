// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Types
import { AboutPageSection } from "@/types";

type Props = {
  section: AboutPageSection;
};

const AboutSection = ({ section }: Props) => {
  const t = useTranslations("Sections.AboutSections");
  return (
    <section>
      <h2 className="font-medium text-2xl lg:text-3xl">{t(section.title)}</h2>
      <p className="text-app-grey-35 text-sm lg:text-base mt-1.5">
        {t(section.description)}
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12.5 lg:mt-14.5">
        {section.cards.map((card) => (
          <li
            key={card.title}
            className="p-7.5 lg:p-10 bg-white rounded-lg flex flex-col gap-2.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="rounded-md bg-app-primary-97 border border-app-primary-90 p-3.5 w-fit mb-3 group-hover:bg-app-primary-99 transition-colors duration-300">
              <Image
                src={card.icon}
                alt={t(card.altIcon)}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>

            <h3 className="font-medium text-lg lg:text-xl">{t(card.title)}</h3>

            <p className="text-app-grey-35 text-sm lg:text-base">
              {t(card.description)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;
