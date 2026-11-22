import { siteConfig } from "./site";
import { faqs } from "@/content/faqs";

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icons/icon-512.png`,
  email: siteConfig.email,
  areaServed: { "@type": "Country", name: "Cameroon" },
  ...(siteConfig.social.length > 0 && { sameAs: siteConfig.social }),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};