export const impactContent = {
  badge: "Made in Cameroon",
  title: "Empowering Cameroonian Talents with Transparent Employment",
  paragraphs: [
    "We started Wakajob to solve a real problem: young graduates and hard-working technicians walking miles under the sun to drop off physical CVs, or falling victim to fraudulent placement fees.",
    "With Wakajob, access to real employers is open, free for job seekers, and organised by neighbourhood.",
  ],
} as const;

/**
 * IMPORTANT: every number below must be true and traceable to a source
 * (analytics, app store console, internal policy) BEFORE launch.
 * Delete any entry you can't back up. An empty slot is better than a false claim.
 */
export const impactStats = [
  {
    value: "10 / 10",
    label: "Regions Active",
    description: "From the Far North to the South-West, connecting local demand with supply.",
    tone: "border-brand-100 bg-brand-50 text-brand-600",
  },
  {
    value: "0 XAF",
    label: "Seeker Fees",
    description: "Free to apply. No registration or placement fees for job seekers.",
    tone: "border-brand-100 bg-brand-50 text-brand-600",
  },
  // Add only when verified:
  // { value: "89%",  label: "Interview Rate", description: "...", tone: "..." },
  // { value: "4.8★", label: "Store Rating",  description: "...", tone: "border-emerald-100 bg-emerald-50 text-success" },
] as const;

export const employerCta = {
  eyebrow: "For businesses & recruiters",
  title: "Are you hiring talent in Cameroon?",
  description:
    "Reach local professionals in Douala, Yaoundé and nearby cities. Post your first listing in minutes.",
  primary: { label: "Post a Job Opening", subject: "Job posting request" },
  secondary: { label: "Enterprise Partnerships", subject: "Partnership enquiry" },
} as const;