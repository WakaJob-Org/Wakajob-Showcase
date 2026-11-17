import Link from 'next/link';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

const navItems = ['Home', 'Features', 'How It Works', 'About'];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_18px_rgba(8,37,98,0.05)]">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1f7dff] to-[#1739b4] text-lg font-black text-white shadow-md shadow-blue-200">
            W
          </span>
          <div className="leading-none">
            <div className="text-[1.75rem] font-black tracking-[-0.04em] text-slate-900">Wakajob</div>
            <div className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Jobs near you</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item} href="#" className="transition-colors hover:text-blue-600">
              {item}
            </Link>
          ))}
        </nav>

        <Button variant="primary" size="sm" className="rounded-full px-4 py-2 text-[0.7rem] font-semibold shadow-md shadow-blue-200">
          Download App
        </Button>
      </Container>
    </header>
  );
};