import { mailto, siteConfig } from "@/lib/site";

export const footerContent = {
  tagline: "More jobs. A brighter future.",
  cities: "Douala • Yaoundé • Buea",
  // Only link to pages that exist. Add columns and links as the product grows.
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Features", href: "/#features" },
        { label: "How It Works", href: "/#how-it-works" },
        { label: "About", href: "/#about" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Employers",
      links: [
        { label: "Post a Job Opening", href: mailto("Job posting request") },
        { label: "Partnerships", href: mailto("Partnership enquiry") },
      ],
    },
    {
      title: "Legal & Privacy",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Contact",
      links: [{ label: siteConfig.email, href: mailto() }],
    },
  ],
} as const;