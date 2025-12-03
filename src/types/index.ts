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

// Benefits Types
export type Benefit = {
  index: string;
  title: TranslationKey;
  description: TranslationKey;
};
