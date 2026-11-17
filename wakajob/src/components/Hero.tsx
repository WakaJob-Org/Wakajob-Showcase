'use client';

import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Search, MapPin, Briefcase } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full mb-4">
            <Briefcase className="w-3.5 h-3.5" /> Connecting Talent with Opportunity
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Find Your Next Job or Hire Top Talent Fast with <span className="text-blue-600">Wakajob</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Discover thousands of local and remote job opportunities tailored to your skills, or connect directly with verified candidates today.
          </p>
        </div>

        {/* Search Bar Widget */}
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-2xl shadow-xl border border-gray-100 mb-12">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Job title, skill, or company" 
                className="w-full bg-transparent focus:outline-none text-sm text-gray-800"
              />
            </div>
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="City, state, or remote" 
                className="w-full bg-transparent focus:outline-none text-sm text-gray-800"
              />
            </div>
            <Button variant="primary" className="w-full h-full py-3">
              Search Jobs
            </Button>
          </form>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center border-t border-gray-100 pt-8">
          <div>
            <div className="text-3xl font-bold text-gray-900">10k+</div>
            <div className="text-sm text-gray-500">Active Jobs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">5k+</div>
            <div className="text-sm text-gray-500">Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">20k+</div>
            <div className="text-sm text-gray-500">Job Seekers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
        </div>
      </Container>
    </section>
  );
};