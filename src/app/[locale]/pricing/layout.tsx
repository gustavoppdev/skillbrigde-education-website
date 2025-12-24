// Next.js
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Next-Intl
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

// Helpers
import { createPageMetadata } from "@/lib/createPageMetadata";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return createPageMetadata({
    locale,
    namespace: `Pages.Pricing`,
    path: "/pricing",
  });
}

export default function PricingLayout({ children }: Props) {
  return <>{children}</>;
}
