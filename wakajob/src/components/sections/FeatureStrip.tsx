import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { features } from "@/content/features";

export function FeatureStrip() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-24 bg-white py-12 lg:py-16"
    >
      <Container>
        {/* The design has no visible heading here, but a section without one leaves a gap
            in the document outline. sr-only keeps it for crawlers and screen readers. */}
        <h2 id="features-heading" className="sr-only">
          Why job seekers choose Wakajob
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, tone }) => (
            <li
              key={title}
              className="rounded-2xl border border-brand-100 bg-surface p-6 transition-shadow hover:shadow-card"
            >
              <span className={cn("grid size-12 place-items-center rounded-xl", tone)}>
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}