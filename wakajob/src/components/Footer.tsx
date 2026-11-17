import { Container } from './ui/Container';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0b1d46] py-12 text-slate-300">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1b7af8] to-[#0b3ec6] text-lg font-black text-white shadow-lg shadow-blue-900/30">
                W
              </span>
              <div>
                <div className="text-2xl font-black text-white">Wakajob</div>
                <div className="text-xs text-slate-400">Jobs. Abroad. Opportunities.</div>
              </div>
            </div>

            <div className="text-sm text-slate-300">Made for Cameroon</div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Job Seekers</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white">Search Jobs</Link></li>
                <li><Link href="#" className="hover:text-white">Internships</Link></li>
                <li><Link href="#" className="hover:text-white">Career Tips</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Employers</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white">Post a Vacancy</Link></li>
                <li><Link href="#" className="hover:text-white">Recruit Candidates</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white">Official Brand Kit</Link></li>
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">Mobile App</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Legal & Privacy</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white">Cookie Settings</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Wakajob. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};