import Link from "next/link";
import { Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { navigation } from "@/content/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100/60 bg-white/85 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="hidden items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-brand-500 xl:inline-flex">
            <MapPin className="size-4" aria-hidden="true" />
            Jobs near you
          </span>
        </div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-ink">
            {navigation.map((item) => {
              // Only "Home" can be "current" on a single-page site.
              // Hash links can't be tracked on the server; scroll-spy can come later.
              const isCurrent = item.href === "/";
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent
                        ? "border-b-2 border-brand-600 pb-1 text-brand-600"
                        : "pb-1 transition-colors hover:text-brand-600"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/#download" className="hidden sm:inline-flex">
            <Download className="size-4" aria-hidden="true" />
            Download App
          </ButtonLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}