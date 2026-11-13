import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CameroonFlag } from "@/components/ui/CameroonFlag";
import { cn } from "@/lib/cn";
import { impactContent, impactStats } from "@/content/impact";

export function Impact() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-white py-16 lg:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Badge
            icon={<CameroonFlag />}
            className="bg-emerald-50 text-xs font-semibold uppercase tracking-wider text-success"
          >
            {impactContent.badge}
          </Badge>

          <h2 id="about-heading" className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {impactContent.title}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-body sm:text-lg">
            {impactContent.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2">
          {impactStats.map((stat) => (
            <div key={stat.label} className={cn("flex flex-col-reverse justify-end rounded-2xl border p-6", stat.tone)}>
              {/* Visual order is value → label → text; DOM order is label → value (dt before dd) */}
              <dd className="mt-1">
                <span className="block font-display text-4xl font-extrabold">{stat.value}</span>
              </dd>
              <dt className="text-lg font-bold text-ink">{stat.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-body">{stat.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}