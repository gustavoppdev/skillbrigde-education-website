import {
  adobeLogo,
  amazonLogo,
  netflixLogo,
  notionLogo,
  spotifyLogo,
  zapierLogo,
  zoomLogo,
} from "@/assets";
import { NavbarLink } from "@/types";

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
