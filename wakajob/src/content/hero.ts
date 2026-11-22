import { Briefcase, TrendingUp, Laptop } from "lucide-react";

export const showcaseJobs = [
  { icon: Briefcase, title: "Marketing Assistant", city: "Yaoundé", distance: "2.4 km" },
  { icon: TrendingUp, title: "Sales Agent", city: "Douala", distance: "5.1 km" },
  { icon: Laptop, title: "IT Support", city: "Bafoussam", distance: "3.8 km" },
] as const;

export const phoneContent = {
  city: "Yaoundé, Cameroon",
  searchPlaceholder: "Search for jobs, skills, or companies...",
  banner: ["Your next opportunity", "is closer than you think"],
  categories: ["All Jobs", "Full-time", "Part-time", "Internship"],
  featured: [
    { company: "MTN Cameroon", initials: "MT", role: "Customer Service Officer", city: "Yaoundé", type: "Full-time", tone: "bg-yellow-400 text-ink" },
    { company: "Orange Cameroun", initials: "OR", role: "Sales Representative", city: "Douala", type: "Full-time", tone: "bg-orange-500 text-white" },
    { company: "BICEC", initials: "BC", role: "IT Support Specialist", city: "Yaoundé", type: "Full-time", tone: "bg-brand-600 text-white" },
  ],
} as const;
export const heroContent = {
  eyebrow: "Job opportunities in Cameroon",
  titleLead: "Find the Right Job,",
  titleAccent: "Near You",
  description:
    "Wakajob helps you discover local job opportunities based on your location. Whether you’re a student, job seeker or professional, your next opportunity is just a tap away.",
  checklist: ["Local & remote jobs", "Location-based results", "Trusted employers"],
} as const;