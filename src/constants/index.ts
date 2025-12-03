import {
  adobeLogo,
  amazonLogo,
  netflixLogo,
  notionLogo,
  spotifyLogo,
  zapierLogo,
  zoomLogo,
} from "@/assets";
import { Benefit, NavbarLink } from "@/types";

// Navbar Links
export const navigationLinks: NavbarLink[] = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/courses",
    label: "courses",
  },
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/pricing",
    label: "pricing",
  },
  {
    href: "/contact",
    label: "contact",
  },
];

// Hero Logos
export const heroLogos = [
  {
    image: zapierLogo,
    alt: "Zapier",
  },
  {
    image: spotifyLogo,
    alt: "Spotify",
  },
  {
    image: zoomLogo,
    alt: "Zoom",
  },
  {
    image: amazonLogo,
    alt: "Amazon",
  },
  {
    image: adobeLogo,
    alt: "Adobe",
  },
  {
    image: notionLogo,
    alt: "Notion",
  },
  {
    image: netflixLogo,
    alt: "Netflix",
  },
];

// Benefits
export const benefits: Benefit[] = [
  {
    index: "01",
    title: "01.title",
    description: "01.description",
  },
  {
    index: "02",
    title: "02.title",
    description: "02.description",
  },
  {
    index: "03",
    title: "03.title",
    description: "03.description",
  },
  {
    index: "04",
    title: "04.title",
    description: "04.description",
  },
  {
    index: "05",
    title: "05.title",
    description: "05.description",
  },
  {
    index: "06",
    title: "06.title",
    description: "06.description",
  },
];
