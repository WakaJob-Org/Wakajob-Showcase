export const siteConfig = {
  name: "Wakajob",
  defaultTitle: "Wakajob | Find Jobs Near You in Cameroon",
  tagline: "Find the Right Job, Near You",
  description:
    "Wakajob helps students, graduates and professionals in Cameroon discover verified local job opportunities near them in Douala, Yaoundé, Bafoussam and beyond.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_CM",
  email: "support@wakajob.cm",
  ogImage: "/images/og-default.png",
  legalName: "Wakajob Technologies Ltd.", // TODO: confirm the registered company name with the client
  themeColor: "#1553e0",
  social: [] as string[], // add real profile URLs (Facebook, LinkedIn, X...) when they exist
  links: {
    appStore: "#",
    playStore: "#",
  },
} as const;
export const mailto = (subject?: string) =>
  `mailto:${siteConfig.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
