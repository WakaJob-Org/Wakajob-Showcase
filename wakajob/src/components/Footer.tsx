import { Container } from './ui/Container';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold text-white">Wakajob</span>
            <p className="mt-2 text-sm text-gray-400">
              Empowering workers and companies to connect, collaborate, and succeed together.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Browse Jobs</Link></li>
              <li><Link href="#" className="hover:text-white">Career Advice</Link></li>
              <li><Link href="#" className="hover:text-white">Create Resume</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Post a Job</Link></li>
              <li><Link href="#" className="hover:text-white">Talent Search</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing Plans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Wakajob. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};