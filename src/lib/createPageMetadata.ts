import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";

type CreatePageMetadataParams = {
  locale: string;
  namespace: string;
  path?: string;
};

export async function createPageMetadata({
  locale,
  namespace,
  path = "",
}: CreatePageMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  const title = t("metadata.title");
  const description = t("metadata.description");
  const keywords = t.raw("metadata.keywords") as string[];

  return {
    title,
    description,
    keywords,

    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteConfig.url}/${locale}${path}`,
      locale,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
