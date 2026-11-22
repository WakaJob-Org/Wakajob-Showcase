import { cn } from "@/lib/cn";

type BadgeProps = {
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};
type Variant = "primary" | "secondary" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-card hover:bg-brand-700",
  secondary: "bg-brand-100 text-brand-700 hover:bg-brand-200",
  light: "bg-white text-brand-700 hover:bg-brand-50",
  "outline-light": "border border-white/30 bg-white/10 text-white hover:bg-white/20",
};

export function Badge({ icon, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-600",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}