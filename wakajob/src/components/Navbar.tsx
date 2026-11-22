import Link from 'next/link';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Download, MapPin } from 'lucide-react';

const navItems = ['Home', 'Features', 'How It Works', 'About'];

export const Navbar = () => {
  return (
    <header className="relative z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 44 36" fill="none" className="h-9 w-9">
              <path d="M4 6C4 3.8 5.8 2 8 2h3.5L16.5 22 22 8l5.5 14L32.5 2H36c2.2 0 4 1.8 4 4l-6.5 25c-.6 2.2-2.4 3-4.5 3H26l-4-11.5L18 34h-3c-2.1 0-3.9-.8-4.5-3L4 6Z" fill="#1565D8" />
              <circle cx="22" cy="4" r="2.8" fill="#1565D8" />
            </svg>
            <span className="text-2xl font-black tracking-tight text-[#1565D8]">Wakajob</span>
          </Link>
          <div className="hidden items-center gap-1.5 border-l border-slate-200 pl-4 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:flex">
            <MapPin className="h-3.5 w-3.5" />
            Jobs near you
          </div>
        </div>

        <nav className="hidden items-center gap-9 text-[15px] font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item} href={item === 'Home' ? '#home' : `#${item.toLowerCase().replaceAll(' ', '-')}`} className={item === 'Home' ? 'relative py-6 font-semibold text-[#1565D8] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:rounded-t-full after:bg-[#1565D8]' : 'transition-colors hover:text-[#1565D8]' }>
              {item}
            </Link>
          ))}
        </nav>

        <Button className="rounded-full px-5 py-2.5 text-sm font-semibold shadow-md shadow-blue-600/20" variant="primary">
          <Download className="mr-2 h-4 w-4" />
          Download App
        </Button>
      </Container>
    </header>
  );
};