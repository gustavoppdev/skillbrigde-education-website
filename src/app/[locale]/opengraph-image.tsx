import { siteConfig } from "@/config/site";
import { getTranslations } from "next-intl/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Props = {
  params: { locale: string };
};

export default async function OpenGraphImage({ params }: Props) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Layout.metadata",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #fcfcfd 0%, #ff9500 100%)",
          color: "#000000",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {t("title")}
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 4,
            background: "#38bdf8",
            margin: "32px 0",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.3,
            maxWidth: 900,
            opacity: 0.9,
          }}
        >
          {t("description")}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            fontSize: 18,
            opacity: 0.6,
          }}
        >
          {siteConfig.url}
        </div>
      </div>
    ),
    size
  );
}
