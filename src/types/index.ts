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

type Lesson = {
  title: TranslationKey;
  lessonNumber: string;
  duration: TranslationKey;
};

type CourseModule = {
  moduleNumber: string;
  title: TranslationKey;
  lessons: Lesson[];
};

export type Course = {
  title: TranslationKey;
  slug: TranslationKey;
  description: TranslationKey;
  teacher: TranslationKey;
  duration: TranslationKey;
  difficulty: TranslationKey;
  images: StaticImageData[];
  modules: CourseModule[];
};

export type Testimonial = {
  avatar: StaticImageData;
  quote: TranslationKey;
  author: TranslationKey;
};

export type BillingFrequency = "monthly" | "yearly";

export type Plan = {
  title: TranslationKey;
  price: {
    monthly: TranslationKey;
    yearly: TranslationKey;
  };
  features: {
    title: TranslationKey;
    available: boolean;
  }[];
};
