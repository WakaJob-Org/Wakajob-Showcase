import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { TrustChecklist } from "./TrustChecklist";
import { HeroVisual } from "./HeroVisual";
import { heroContent } from "@/content/hero";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-linear-to-b from-white to-brand-50"
    >
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div className="max-w-xl">
          <Badge icon={<MapPin className="size-4" aria-hidden="true" />}>
            {heroContent.eyebrow}
          </Badge>

          <h1
            id="hero-heading"
            className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            {heroContent.titleLead}
            <span className="block text-brand-600">{heroContent.titleAccent}</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-body">
            {heroContent.description}
          </p>

          <div className="mt-8">
            <TrustChecklist items={heroContent.checklist} />
          </div>

          <div id="download" className="mt-10 flex scroll-mt-28 flex-wrap items-center gap-3">
            <StoreBadge store="app-store" href={siteConfig.links.appStore} />
            <StoreBadge store="google-play" href={siteConfig.links.playStore} />
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}