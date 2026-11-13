import { Hero } from "@/components/sections/hero/Hero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Impact } from "@/components/sections/Impact";
import { EmployerCta } from "@/components/sections/EmployerCta";
import { Faq } from "@/components/sections/Faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <FeatureStrip />
      <HowItWorks />
      <Impact />
      <EmployerCta />
      <Faq />
    </main>
  );
}