import { siteConfig } from "@/lib/site";

export const faqContent = {
  eyebrow: "Got questions?",
  title: "Frequently Asked Questions",
  description: "Everything you need to know about Wakajob and staying safe while job hunting.",
} as const;

export const faqs = [
  {
    question: "Is Wakajob free for job seekers?",
    answer: `Yes. Creating a profile, browsing jobs and applying are free for job seekers. Wakajob never charges seekers registration or placement fees, and no employer should ask you to pay to be considered. If anyone asks you for money, report it to ${siteConfig.email}.`,
  },
  {
    question: "How does location-based job matching work?",
    answer:
      "Set your city or neighbourhood (for example Bonapriso, Bastos or Molyko) and Wakajob shows the vacancies closest to you first. You can change your location at any time to look in another city or region.",
  },
  {
    question: "How do companies get the verified badge?",
    answer:
      "Employers submit their business details, including their commercial registry number (RCCM). Our team checks them before the Verified badge appears on their listings.",
  },
  {
    question: "Can I use Wakajob on Android and iOS?",
    answer:
      "Yes. Wakajob is available on Google Play for Android and on the App Store for iPhone.",
  },
] as const;