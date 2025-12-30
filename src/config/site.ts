// Auto-detect site URL based on environment
const getSiteUrl = () => {
  // If explicitly set, use it
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // In production (Vercel), use Vercel URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Default to localhost in development
  return "http://localhost:3000";
};

export const siteConfig = {
  name: "Skillbridge",
  url: getSiteUrl(),
};
