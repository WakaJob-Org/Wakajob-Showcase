import { Container } from './ui/Container';
import { UserCheck, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Verified Profiles',
    description: 'Connect with authentic employers and pre-screened job seekers with complete peace of mind.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Matching',
    description: 'Our smart algorithm ensures your profile matches the right positions based on your exact skillset.',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Get notified in real-time as soon as a relevant job or qualified applicant becomes available.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Access insights, salary estimations, and recommendations to fast-track your professional journey.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Wakajob?
          </h2>
          <p className="mt-4 text-gray-600">
            We simplify the hiring and job search process with modern tools designed for candidates and employers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};