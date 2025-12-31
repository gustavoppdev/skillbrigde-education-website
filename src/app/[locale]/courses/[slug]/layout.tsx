// Next.js
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Next-Intl
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

// Helpers
import { createPageMetadata } from "@/lib/createPageMetadata";
import { setRequestLocale } from "next-intl/server";
import { getCourseBySlug } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const translationKey = course.slugs.en;

  setRequestLocale(locale);

  return createPageMetadata({
    locale,
    namespace: `Pages.OpenCourse.${translationKey}`,
    path: "/courses/[slug]",
  });
}

export default async function OpenCourseLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <>{children}</>;
}
