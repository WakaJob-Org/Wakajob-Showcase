import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  icon: LucideIcon;
  title: string;
  city: string;
  distance: string;
  className?: string;
};

export function FloatingJobCard({ icon: Icon, title, city, distance, className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute z-30 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card sm:flex",
        // small pointer under the card, like the design's map-pin callouts
        "after:absolute after:-bottom-1.5 after:left-6 after:size-3 after:rotate-45 after:bg-white",
        className,
      )}
    >
      <Icon className="size-6 text-brand-600" />
      <div className="leading-tight">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="mt-0.5 text-xs text-body">
          {city} • {distance}
        </p>
      </div>
    </div>
  );
}