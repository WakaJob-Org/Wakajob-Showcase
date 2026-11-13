import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { employerCta } from "@/content/impact";
import { siteConfig } from "@/lib/site";

const mailto = (subject: string) =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;

export function EmployerCta() {
  return (
    <section
      id="employers"
      aria-labelledby="employers-heading"
      className="scroll-mt-24 bg-linear-to-r from-brand-700 to-brand-600 py-14 text-white lg:py-16"
    >
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {employerCta.eyebrow}
          </p>
          <h2 id="employers-heading" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            {employerCta.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
            {employerCta.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink variant="light" size="lg" href={mailto(employerCta.primary.subject)}>
            {employerCta.primary.label}
          </ButtonLink>
          <ButtonLink variant="outline-light" size="lg" href={mailto(employerCta.secondary.subject)}>
            {employerCta.secondary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}