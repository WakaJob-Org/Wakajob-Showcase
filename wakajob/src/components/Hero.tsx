'use client';

import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Search, MapPin, Play, CheckCircle, ArrowRight, Star, BriefcaseBusiness } from 'lucide-react';

const quickFacts = [
  { value: '12,400+', label: 'Active Applicants' },
  { value: '850+', label: 'Verified Companies' },
  { value: '10 / 10', label: 'Rating' },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f6ff] via-[#edf3ff] to-[#f8faff] pb-8 pt-8">
      <div className="absolute inset-x-0 top-0 h-[430px] bg-[radial-gradient(circle_at_top_left,_rgba(59,122,255,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(93,161,255,0.14),_transparent_25%)]" />

      <Container className="relative">
        <div className="grid items-center gap-12 py-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h1 className="max-w-[560px] text-[3.1rem] font-black leading-[0.94] tracking-[-0.065em] text-slate-900 sm:text-[3.6rem] lg:text-[4.2rem]">
              Find the Right Job,
              <span className="block">Near You</span>
            </h1>

            <p className="mt-5 max-w-[540px] text-lg leading-8 text-slate-600">
              Wakajob helps you discover local job opportunities based on your location. Whether you&apos;re a student, job seeker or professional, your next opportunity is just a tap away.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              {['Local & remote jobs', 'Location-based results', 'Trusted employers'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 shadow-sm">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" className="rounded-xl px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-200">
                Download on the App Store
              </Button>
              <Button variant="secondary" className="rounded-xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200">
                <span className="inline-flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Google Play
                </span>
              </Button>
            </div>

            <div className="mt-8 grid max-w-[600px] grid-cols-3 gap-4">
              {quickFacts.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 shadow-[0_10px_20px_rgba(18,45,120,0.04)]">
                  <div className="text-[1.8rem] font-black tracking-tight text-slate-900">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_80px_rgba(19,42,100,0.18)]">
              <div className="mb-4 flex items-center justify-between rounded-2xl bg-slate-100 px-3 py-2 text-[0.7rem] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-medium text-slate-600">Wakajob</span>
                <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1 font-semibold text-slate-600">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  4.9
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#f1f7ff] via-[#edf4ff] to-[#dfeeff] p-4">
                <div className="mb-4 flex items-center justify-between rounded-2xl bg-white/90 px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Search className="h-4 w-4 text-blue-600" />
                    Search Jobs
                  </div>
                  <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-blue-700">
                    Local
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-blue-600">Featured</div>
                        <div className="mt-1 text-lg font-bold text-slate-900">Front-End Developer</div>
                      </div>
                      <div className="rounded-full bg-emerald-50 px-2 py-1 text-[0.65rem] font-semibold text-emerald-700">Remote</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#0d5dfb] p-3 text-white shadow-md shadow-blue-200">
                      <div className="text-[0.6rem] uppercase tracking-[0.2em] text-blue-100">Jobs</div>
                      <div className="mt-3 text-3xl font-black">120+</div>
                    </div>
                    <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                      <div className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">Applicants</div>
                      <div className="mt-3 text-3xl font-black text-slate-900">3.2k</div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Nearby Opportunities
                    </div>
                    <div className="mt-3 space-y-2">
                      {['Product Designer', 'Marketing Specialist', 'Operations Lead'].map((role) => (
                        <div key={role} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
                          <span>{role}</span>
                          <ArrowRight className="h-4 w-4 text-blue-600" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};