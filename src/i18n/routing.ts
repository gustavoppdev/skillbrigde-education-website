import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "pt"],

  // Used when no locale matches
  defaultLocale: "pt",

  pathnames: {
    "/": {
      pt: "/",
      en: "/",
    },
    "/courses": {
      pt: "/cursos",
      en: "/courses",
    },
    "/courses/[slug]": {
      pt: "/cursos/[slug]",
      en: "/courses/[slug]",
    },
    "/pricing": {
      pt: "/planos",
      en: "/pricing",
    },
    "/about": {
      pt: "/sobre",
      en: "/about",
    },
    "/auth/sign-in": {
      pt: "/auth/entrar",
      en: "/auth/sign-in",
    },
    "/auth/sign-up": {
      pt: "/auth/cadastro",
      en: "/auth/sign-up",
    },
    "/contact": {
      pt: "/contato",
      en: "/contact",
    },
  },
});
