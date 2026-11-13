import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqContent, faqs } from "@/content/faqs";
import { faqSchema } from "@/lib/schema";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-white py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="faq-heading"
          eyebrow={faqContent.eyebrow}
          title={faqContent.title}
          description={faqContent.description}
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-brand-100 bg-surface open:bg-white open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <ChevronDown
                  className="size-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-body">{faq.answer}</p>
            </details>
          ))}
        </div>

        <JsonLd data={faqSchema} />
      </Container>
    </section>
  );
}