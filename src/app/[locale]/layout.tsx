// Next.js
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { notFound } from "next/navigation";

// Next-Intl
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Config
import { siteConfig } from "@/config/site";

// CSS & Layout
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";

const beVietnamProp = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

type LayoutProps = {
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

  const t = await getTranslations({ locale, namespace: "Layout" });

  const title = t("metadata.title");
  const description = t("metadata.description");
  const keywords = t.raw("metadata.keywords") as string[];

  return {
    metadataBase: new URL(siteConfig.url),

    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },

    description,
    keywords,

    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: `${siteConfig.url}/${locale}`,
      locale,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${beVietnamProp.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthProvider>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
