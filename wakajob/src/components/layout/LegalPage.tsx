import { Container } from "@/components/ui/Container";

type Props = { title: string; updated: string; children: React.ReactNode };

export function LegalPage({ title, updated, children }: Props) {
  return (
    <main id="main" className="bg-white py-14 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-body">Last updated: {updated}</p>
        <div className="prose mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-a:text-brand-600">
          {children}
        </div>
      </Container>
    </main>
  );
}