import Image from "next/image";
import heroPhoto from "@/assets/images/hero-photo.jpg";
import { PhoneMockup } from "./PhoneMockup";
import { FloatingJobCard } from "./FloatingJobCard";
import { showcaseJobs } from "@/content/hero";

const cardPositions = [
  "right-[14%] top-[6%]",
  "right-[2%] top-[24%]",
  "right-0 top-[44%]",
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-4/5 w-full max-w-xl sm:aspect-auto sm:h-[600px] lg:max-w-none">
      {/* Photo panel: full width on mobile, right 78% when the phone is shown */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-brand-600 sm:left-[22%]">
        <Image
          src={heroPhoto}
          alt="Smiling young man using the Wakajob app on his phone"
          fill
          priority
          placeholder="blur"
          quality={75}
          sizes="(min-width: 640px) 450px, 100vw"
          className="object-cover object-[65%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-tr from-brand-700/50 via-transparent to-transparent"
        />
      </div>

      {/* Phone: pure HTML, hidden on mobile so it costs nothing there */}
      <PhoneMockup className="absolute left-[3%] top-1/2 z-20 hidden -translate-y-1/2 sm:block" />

      {showcaseJobs.map((job, i) => (
        <FloatingJobCard key={job.title} {...job} className={cardPositions[i]} />
      ))}
    </div>
  );
}