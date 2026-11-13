import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="bg-surface py-24 lg:py-32">
      <Container className="max-w-xl text-center">
        <p className="font-display text-6xl font-extrabold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-body">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back to finding work.
        </p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Back to homepage
        </ButtonLink>
      </Container>
    </main>
  );
}