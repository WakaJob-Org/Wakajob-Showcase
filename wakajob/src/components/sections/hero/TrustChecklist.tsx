import { Check } from "lucide-react";

export function TrustChecklist({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-[15px] font-medium text-ink/80">
          <span className="grid size-5 place-items-center rounded-full bg-brand-600 text-white">
            <Check className="size-3" strokeWidth={3} aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}