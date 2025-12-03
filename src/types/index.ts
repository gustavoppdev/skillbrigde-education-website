import { StaticImageData } from "next/image";

export type TranslationKey = string;

// Navbar Types
export type NavbarLink = {
  href: string;
  label: TranslationKey;
};

// Hero Types
export type HeroLogo = {
  image: StaticImageData;
  alt: TranslationKey;
};
