import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { CameroonFlag } from "@/components/ui/CameroonFlag";
import { footerContent } from "@/content/footer";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white/75">
      <Container className="py-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Logo variant="white" />
            <p className="mt-3 text-sm">{footerContent.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-white">
              Made for Cameroon
              <CameroonFlag className="h-3.5 w-5" />
            </span>
            <span>{footerContent.cities}</span>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4"
        >
          {footerContent.columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="break-words transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} {siteConfig.legalName} All rights reserved.
        </p>
      </Container>
    </footer>
  );
}