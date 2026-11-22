import {
  ArrowRight, Bookmark, Briefcase, ChevronDown, ChevronRight, Clock,
  FileText, GraduationCap, Home, MapPin, Search, Timer, User,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { phoneContent } from "@/content/hero";

const categoryIcons = [Briefcase, Clock, Timer, GraduationCap];
const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Bookmark, label: "Saved" },
  { icon: FileText, label: "Applications" },
  { icon: User, label: "Profile" },
];

export function PhoneMockup({ className }: { className?: string }) {
  return (
    // role="img" makes the whole mockup ONE labelled graphic for screen readers
    // instead of a wall of 8px text. The text remains in the HTML for crawlers.
    <div
      role="img"
      aria-label="Preview of the Wakajob app showing featured jobs near Yaoundé"
      className={cn(
        "relative aspect-9/19 w-[16.5rem] overflow-hidden rounded-[2.4rem] border-[6px] border-ink bg-white shadow-2xl shadow-brand-900/30",
        className,
      )}
    >
      {/* dynamic island */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />

      <div className="flex h-full flex-col px-3 pb-14 pt-3 text-ink">
        <span className="px-2 text-[9px] font-semibold">9:41</span>

        <p className="mt-3 text-center font-display text-sm font-extrabold text-brand-600">
          Wakajob
        </p>

        <p className="mt-2 flex items-center gap-1 text-[9px] font-medium text-brand-600">
          <MapPin className="size-2.5" />
          {phoneContent.city}
          <ChevronDown className="size-2.5" />
        </p>

        <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-brand-100 bg-brand-50 px-2 py-1.5 text-[8px] text-body/70">
          <Search className="size-3" />
          {phoneContent.searchPlaceholder}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl bg-linear-to-r from-brand-600 to-brand-500 px-3 py-3.5 text-white">
          <p className="text-[10px] font-semibold leading-tight">
            {phoneContent.banner[0]}
            <br />
            {phoneContent.banner[1]}
          </p>
          <span className="grid size-5 place-items-center rounded-full bg-white text-brand-600">
            <ArrowRight className="size-3" />
          </span>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {phoneContent.categories.map((label, i) => {
            const Icon = categoryIcons[i];
            return (
              <div key={label} className="flex flex-col items-center gap-1 rounded-lg border border-brand-100 py-1.5">
                <Icon className="size-3.5 text-brand-600" />
                <span className="text-[6.5px] font-medium">{label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-between text-[9px] font-semibold">
          <span>Featured Jobs</span>
          <span className="text-brand-600">See All</span>
        </div>

        <ul className="mt-2 flex-1 space-y-1.5 overflow-hidden">
          {phoneContent.featured.map((job) => (
            <li key={job.company} className="flex items-center gap-2 rounded-lg border border-brand-100 p-2">
              <span className={cn("grid size-7 shrink-0 place-items-center rounded-md text-[8px] font-bold", job.tone)}>
                {job.initials}
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block text-[7px] font-semibold">{job.company}</span>
                <span className="block truncate text-[7px] text-body">{job.role}</span>
                <span className="block text-[6px] text-body/70">{job.city} · {job.type}</span>
              </span>
              <ChevronRight className="size-3 text-body/40" />
            </li>
          ))}
        </ul>
      </div>

      {/* bottom tab bar */}
      <div className="absolute inset-x-0 bottom-0 flex justify-around border-t border-brand-100 bg-white px-2 pb-2 pt-1.5">
        {navItems.map(({ icon: Icon, label, active }) => (
          <span key={label} className={cn("flex flex-col items-center gap-0.5 text-[6px]", active ? "text-brand-600" : "text-body/60")}>
            <Icon className="size-3.5" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}