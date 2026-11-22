import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Wakajob',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    description: 'A location-based job search platform for opportunities across Cameroon.',
    url: 'https://wakajob.com',
    areaServed: { '@type': 'Country', name: 'Cameroon' },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div>
        <Navbar />
        <main>
          <Hero />
          <Features />
        </main>
      </div>
      <Footer />
    </div>
  );
}