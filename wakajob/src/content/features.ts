import { MapPin, ShieldCheck, Users, Zap } from "lucide-react";

export const features = [
  {
    icon: MapPin,
    title: "Location Based",
    description: "Find jobs near you, in your city or region, without endless commutes.",
    tone: "bg-brand-100 text-brand-600",
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    description: "Apply in minutes with a simple, direct 1-tap WhatsApp or digital CV.",
    tone: "bg-sky-100 text-sky-600",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Employers",
    description: "Work with verified companies across Cameroon.",
    tone: "bg-emerald-100 text-success",
  },
  {
    icon: Users,
    title: "For Everyone",
    description: "Students, graduates, artisans and professionals, all welcome.",
    tone: "bg-violet-100 text-violet-600",
  },
] as const;