import { Container } from './ui/Container';
import { MapPin, Zap, ShieldCheck, TrendingUp, CheckCircle2, ChevronDown } from 'lucide-react';

const featureCards = [
  {
    icon: MapPin,
    title: 'Location Based',
    description: 'Find jobs near you and discover opportunities without having to travel far.',
  },
  {
    icon: Zap,
    title: 'Fast & Easy',
    description: 'Apply with a simple, direct, and user-friendly process designed for busy candidates.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Employers',
    description: 'Work with verified employers and a professional network you can count on.',
  },
  {
    icon: TrendingUp,
    title: 'For Everyone',
    description: 'Built for students, professionals, and job seekers looking for long-term growth.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Set Your Location',
    description: 'Input your city or preferred area to discover nearby and relevant jobs.',
  },
  {
    number: '02',
    title: 'Filter Verified Jobs',
    description: 'Browse relevant listings from trusted employers and filter by your interests.',
  },
  {
    number: '03',
    title: 'Apply in 1-Tap',
    description: 'Send your profile or CV in seconds and start your application without friction.',
  },
  {
    number: '04',
    title: 'Interview & Get Hired',
    description: 'Move forward confidently with a streamlined hiring experience and real opportunities.',
  },
];

const faqs = [
  'Is Wakajob free for job seekers?',
  'How does location-based job matching work?',
  'How do companies get verified (\u00a0Verified)?',
  'Can I use Wakajob on Android and iOS?',
];

export const Features = () => {
  return (
    <>
      <section id="features" className="bg-[#f5f8ff] py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(13,39,100,0.03)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[1.35rem] font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>

          <div id="how-it-works" className="mt-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-700">Simple 4-step process</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">How Wakajob Works For You</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Built specifically for the Cameroonian job market. No agency registration fees. No unnecessary hurdles.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.number} className="rounded-[1.7rem] border border-slate-200 bg-[#edf3ff] p-6 text-left shadow-sm">
                  <div className="mb-4 text-sm font-black text-blue-700">{step.number}</div>
                  <h3 className="text-[1.35rem] font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f8ff] py-12">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1.3fr]">
            <div className="text-left">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-blue-700">Made in Cameroon</p>
              <h2 className="mt-4 max-w-md text-[2.4rem] font-black leading-[1.05] tracking-[-0.05em] text-slate-900">
                Empowering Cameroonian Talents with Transparent Employment
              </h2>
              <p className="mt-4 max-w-[460px] text-[0.95rem] leading-7 text-slate-600">
                We started Wakajob to create a more transparent and efficient job search experience for people across Cameroon and beyond.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['A', 'B', 'C'].map((letter, idx) => (
                    <span key={letter} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[0.65rem] font-bold ${idx === 0 ? 'bg-blue-500 text-white' : idx === 1 ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {letter}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-700">Joined by 1,000+ job seekers</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-[2.1rem] font-black tracking-tight text-slate-900">89%</div>
                <p className="mt-2 text-sm text-slate-600">Interview Rate</p>
              </div>
              <div className="rounded-[1.4rem] border border-slate-200 bg-[#0d5dfb] p-5 text-white shadow-lg shadow-blue-200">
                <div className="text-[2.1rem] font-black tracking-tight">0 XAF</div>
                <p className="mt-2 text-sm text-blue-100">Seeker Fees</p>
              </div>
              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-[2.1rem] font-black tracking-tight text-slate-900">10 / 10</div>
                <p className="mt-2 text-sm text-slate-600">Recruit Satisfaction</p>
              </div>
              <div className="rounded-[1.4rem] border border-slate-200 bg-[#eaf7ef] p-5 shadow-sm">
                <div className="text-[2.1rem] font-black tracking-tight text-slate-900">4.8 ★</div>
                <p className="mt-2 text-sm text-slate-600">Store Rating</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0d5dfb] py-14">
        <Container>
          <div className="flex flex-col gap-6 rounded-[1.5rem] bg-[#0d5dfb] px-6 py-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">For businesses & recruiters</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Are you hiring talent in Cameroon?</h2>
              <p className="mt-2 text-base text-blue-100">
                Reach thousands of pre-qualified candidates in Douala, Yaoundé and nearby cities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-md shadow-blue-200">Post a Job Opening</button>
              <button className="rounded-xl border border-white/40 bg-transparent px-5 py-3 text-sm font-semibold text-white">Enterprise Partnership</button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f8ff] py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Got questions?</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-base text-slate-600">Everything you need to know about Wakajob and safety protocols.</p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details key={faq} className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm" open={faq === faqs[0]}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium text-slate-800">
                  <span>{faq}</span>
                  <ChevronDown className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Wakajob provides access to verified opportunities, secure employer profiles, and a streamlined process for job seekers and recruiters alike.
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};