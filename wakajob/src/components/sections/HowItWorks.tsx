import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepsContent } from "@/content/steps";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 bg-surface py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="how-heading"
          eyebrow={stepsContent.eyebrow}
          title={stepsContent.title}
          description={stepsContent.description}
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stepsContent.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 text-center"
            >
              <span
                aria-hidden="true"
                className="mx-auto grid size-14 place-items-center rounded-xl bg-brand-100 font-display text-lg font-extrabold text-brand-600"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}