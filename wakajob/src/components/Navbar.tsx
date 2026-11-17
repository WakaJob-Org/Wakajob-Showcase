import Link from 'next/link';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Wakajob
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
          <Link href="#jobs" className="hover:text-blue-600 transition-colors">Browse Jobs</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About Us</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Log in
          </Link>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
};