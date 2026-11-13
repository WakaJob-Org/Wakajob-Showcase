"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main id="main" className="py-24">
      <Container className="max-w-xl text-center">
        <h1 className="text-3xl font-extrabold">Something went wrong</h1>
        <p className="mt-4 text-body">Please try again.</p>
        <Button onClick={reset} size="lg" className="mt-8">
          Try again
        </Button>
      </Container>
    </main>
  );
}