import { cn } from "@/lib/cn";

type Props = {
  id: string;            // used by the section's aria-labelledby
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-3 text-3xl font-extrabold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{description}</p>
      )}
    </div>
  );
}