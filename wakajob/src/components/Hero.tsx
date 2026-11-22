"use client";

import React from "react";
import {
  MapPin,
  Download,
  CheckCircle2,
  Search,
  Briefcase,
  Clock,
  GraduationCap,
  Home,
  Heart,
  FileText,
  User,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Zap,
  ShieldCheck,
  Users,
  BarChart3,
  Laptop,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

// Custom Wakajob "W" Logo Component
const WakajobLogo = ({
  white = false,
  size = "md",
}: {
  white?: boolean;
  size?: "sm" | "md";
}) => {
  const iconSize = size === "sm" ? "w-6 h-6" : "w-9 h-9";
  const textSize = size === "sm" ? "text-lg" : "text-2xl";

  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        viewBox="0 0 44 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconSize}
      >
        {/* Left Pin-like Wing */}
        <path
          d="M4 6C4 3.79086 5.79086 2 8 2H11.5L16.5 22L22 8L27.5 22L32.5 2H36C38.2091 2 40 3.79086 40 6L33.5 31C32.9 33.2 31.1 34 29 34H26L22 22.5L18 34H15C12.9 34 11.1 33.2 10.5 31L4 6Z"
          fill={white ? "#FFFFFF" : "#1565D8"}
        />
        {/* Pin Dot Accent */}
        <circle
          cx="22"
          cy="4"
          r="2.8"
          fill={white ? "#FFFFFF" : "#1565D8"}
        />
      </svg>
      <span
        className={`font-extrabold tracking-tight ${textSize} ${
          white ? "text-white" : "text-[#1565D8]"
        }`}
      >
        Wakajob
      </span>
    </div>
  );
};

export function WakajobLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FD] text-[#0F172A] font-sans overflow-x-hidden">
      {/* ================= TOP NAVIGATION ================= */}
      <header className="w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand + Tagline */}
          <div className="flex items-center gap-5">
            <WakajobLogo />
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase border-l border-slate-200 pl-4">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>JOBS NEAR YOU</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium text-slate-600">
            <a
              href="#home"
              className="text-[#1565D8] font-semibold relative py-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#1565D8] after:rounded-t-full"
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-[#1565D8] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#1565D8] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="hover:text-[#1565D8] transition-colors"
            >
              About
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#1565D8] hover:bg-[#1152B2] text-white font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md shadow-blue-600/20 transition-all cursor-pointer">
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </button>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <main className="relative flex-1 flex flex-col justify-between">
        {/* Background Decorative Blue Right Wave / Curve */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-[46%] pointer-events-none overflow-hidden z-0"
        >
          {/* Outer subtle blue arc */}
          <svg
            viewBox="0 0 700 800"
            fill="none"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <path
              d="M210 0C95 190 45 430 140 800H700V0H210Z"
              fill="#1565D8"
            />
            <path
              d="M175 0C65 190 15 430 110 800"
              stroke="#1E74EB"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Soft Left Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute top-12 left-10 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none z-0"
        />

        {/* Hero Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-10 pb-14 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ---------- LEFT COLUMN: COPY & STORE BUTTONS ---------- */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E3EEFF] text-[#1565D8] px-4 py-1.5 rounded-full text-sm font-semibold">
              <MapPin className="w-4 h-4 fill-[#1565D8] text-white" />
              <span>Job opportunities in Cameroon</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[54px] font-extrabold leading-[1.1] tracking-tight text-[#0B1528]">
              Find the Right Job,{" "}
              <span className="text-[#1565D8] block mt-1">Near You</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-md">
              Wakajob helps you discover local job opportunities based on your
              location. Whether you&apos;re a student, job seeker or
              professional, your next opportunity is just a tap away.
            </p>

            {/* 3 Checkmark Highlights */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-1 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white fill-[#1565D8]" />
                <span>Local &amp; remote jobs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white fill-[#1565D8]" />
                <span>Location-based results</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white fill-[#1565D8]" />
                <span>Trusted employers</span>
              </div>
            </div>

            {/* App Store, Google Play & QR Code Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              {/* App Store Button */}
              <a
                href="#app-store"
                className="bg-[#0B0F19] hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-md transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.32c.67-.81 1.12-1.94 1-3.07-.96.04-2.13.64-2.82 1.45-.61.7-.115 1.85-1.01 2.96 1.07.08 2.16-.53 2.83-1.34z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-300">
                    Download on the
                  </div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#google-play"
                className="bg-[#0B0F19] hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-md transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.2-9.2v-.2L3.7 2.3l-.1.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M16 15.5l-3.1-3.1v-.2L16 9.1l.1.1 3.6 2.1c1 .6 1 1.5 0 2.1l-3.6 2.1-.1 0z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M16.1 15.4L12.9 12.2 3.6 21.5c.3.4.9.4 1.6 0l10.9-6.1z"
                  />
                  <path
                    fill="#EA4335"
                    d="M16.1 9L5.2 2.9c-.7-.4-1.3-.4-1.6 0l9.3 9.3L16.1 9z"
                  />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-300 uppercase">
                    GET IT ON
                  </div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>

              {/* Scan QR Code Widget */}
              <div className="flex items-center gap-2.5 pl-1">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg p-1.5 shadow-sm flex items-center justify-center">
                  {/* Stylized QR SVG */}
                  <svg
                    viewBox="0 0 36 36"
                    className="w-full h-full text-slate-800"
                    fill="currentColor"
                  >
                    <path d="M2 2h10v10H2V2zm2 2v6h6V4H4zm2 2h2v2H6V6zm18-4h10v10H24V2zm2 2v6h6V4h-6zm2 2h2v2h-2V6zM2 24h10v10H2V24zm2 2v6h6v-6H4zm2 2h2v2H6v-2zm10-24h2v4h-2V4zm4 2h2v4h-2V6zm-4 6h4v2h-4v-2zm-12 4h4v2H4v-2zm6 0h2v4h-2v-4zm4 2h6v2h-6v-2zm8-2h4v4h-4v-4zm6 0h2v6h-2v-6zM14 22h4v4h-4v-4zm6 2h4v2h-4v-2zm6-2h2v6h-2v-6zm-12 6h2v6h-2v-6zm4 2h6v4h-6v-4zm8 0h4v4h-4v-4z" />
                  </svg>
                </div>
                <div className="text-xs leading-snug">
                  <div className="font-semibold text-slate-700">
                    Scan QR Code
                  </div>
                  <div className="text-slate-400">(Coming soon)</div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT COLUMN: PHONE MOCKUP + PERSON + FLOATING CARDS ---------- */}
          <div className="lg:col-span-7">
            {/* Visual Composition Wrapper */}
            <div className="relative w-full max-w-[660px] h-[540px] flex items-center">
              {/* 1. MOBILE PHONE MOCKUP (Slightly tilted in 3D perspective on the left) */}
              <div className="relative z-20 w-[265px] sm:w-[285px] bg-[#0F172A] rounded-[42px] p-[10px] shadow-[0_25px_60px_-15px_rgba(11,21,40,0.45)] border-[3px] border-slate-700/80 transform -rotate-1">
                {/* Inner Phone Screen */}
                <div className="bg-[#F8FAFC] rounded-[33px] overflow-hidden flex flex-col h-[515px] text-[#0F172A]">
                  {/* Status Bar + Dynamic Island */}
                  <div className="px-5 pt-2.5 pb-1.5 flex items-center justify-between text-[11px] font-bold text-slate-800 bg-white">
                    <span>9:41</span>
                    <div className="w-20 h-4 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Header Logo */}
                  <div className="bg-white px-4 py-1.5 flex justify-center border-b border-slate-100">
                    <WakajobLogo size="sm" />
                  </div>

                  {/* Location Selector & Search */}
                  <div className="px-3.5 pt-2.5 pb-2 bg-white space-y-2">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-[#1565D8]" />
                      <span>Yaoundé, Cameroon</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>

                    <div className="bg-slate-100 rounded-xl px-3 py-2 flex items-center gap-2 text-[10px] text-slate-400">
                      <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">
                        Search for jobs, skills, or companies...
                      </span>
                    </div>
                  </div>

                  {/* Blue Promo Banner Inside App */}
                  <div className="px-3.5 py-2">
                    <div className="bg-gradient-to-r from-[#1565D8] to-[#247AF3] rounded-2xl p-3 text-white flex items-center justify-between shadow-sm">
                      <div className="text-[11px] font-semibold leading-tight max-w-[155px]">
                        Your next opportunity is closer than you think
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white text-[#1565D8] flex items-center justify-center shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Category Quick Icons */}
                  <div className="px-3.5 py-1.5 grid grid-cols-4 gap-1.5 text-center">
                    {[
                      { label: "All Jobs", icon: Briefcase, active: true },
                      { label: "Full-time", icon: Clock, active: false },
                      { label: "Part-time", icon: Clock, active: false },
                      {
                        label: "Internship",
                        icon: GraduationCap,
                        active: false,
                      },
                    ].map((cat) => (
                      <div
                        key={cat.label}
                        className="flex flex-col items-center gap-1"
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            cat.active
                              ? "bg-[#E3EEFF] text-[#1565D8]"
                              : "bg-white border border-slate-100 text-slate-600"
                          }`}
                        >
                          <cat.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-medium text-slate-600">
                          {cat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Featured Jobs List */}
                  <div className="px-3.5 pt-2 flex-1 space-y-2 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-800">
                        Featured Jobs
                      </span>
                      <span className="text-[10px] font-semibold text-[#1565D8]">
                        See All
                      </span>
                    </div>

                    {/* Job Card 1: MTN */}
                    <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#FFCC00] flex items-center justify-center font-black text-[9px] text-slate-900">
                          MTN
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 font-medium">
                            MTN Cameroon
                          </div>
                          <div className="text-[10px] font-bold text-slate-800 leading-tight">
                            Customer Service Officer
                          </div>
                          <div className="text-[8px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <span>📍 Yaoundé</span>
                            <span>• Full-time</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>

                    {/* Job Card 2: Orange */}
                    <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#FF7900] flex items-center justify-center font-bold text-[8px] text-white">
                          orange
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 font-medium">
                            Orange Cameroun
                          </div>
                          <div className="text-[10px] font-bold text-slate-800 leading-tight">
                            Sales Representative
                          </div>
                          <div className="text-[8px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <span>📍 Douala</span>
                            <span>• Full-time</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>

                    {/* Job Card 3: BICEC */}
                    <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#0055A5] flex items-center justify-center font-bold text-[8px] text-white">
                          BICEC
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 font-medium">
                            BICEC
                          </div>
                          <div className="text-[10px] font-bold text-slate-800 leading-tight">
                            IT Support Specialist
                          </div>
                          <div className="text-[8px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <span>📍 Yaoundé</span>
                            <span>• Full-time</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                  </div>

                  {/* Bottom Tab Navigation Inside App */}
                  <div className="bg-white border-t border-slate-100 px-3 py-1.5 grid grid-cols-4 text-center">
                    <div className="flex flex-col items-center text-[#1565D8]">
                      <Home className="w-3.5 h-3.5" />
                      <span className="text-[8px] font-semibold mt-0.5">
                        Home
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-slate-400">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-[8px] mt-0.5">Saved</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-400">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="text-[8px] mt-0.5">Applications</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-400">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-[8px] mt-0.5">Profile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. YOUNG BLACK MAN HOLDING PHONE + CAMEROON CITYSCAPE BACKDROP */}
              <div className="hidden sm:block relative z-10 -ml-10 w-[390px] h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white/20 bg-[#1B6FE5]">
                {/* Background City / Monument Atmosphere */}
                <img
                  src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=900&q=80"
                  alt="City skyline background"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1565D8]/80 via-transparent to-[#1565D8]/30" />

                {/* Smiling Young Black Man Looking at Smartphone */}
                <img
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=85"
                  alt="Young Cameroonian professional smiling while checking Wakajob on his phone"
                  className="relative z-10 w-full h-full object-cover object-top"
                />
              </div>

              {/* 3. FLOATING JOB NOTIFICATION CARDS (Right Side) */}
              {/* Card 1: Marketing Assistant */}
              <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_14px_30px_rgba(15,23,42,0.14)] border border-white absolute top-6 right-2 z-30 animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1FF] text-[#1565D8] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Marketing Assistant
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Yaoundé • 2.4 km
                  </div>
                </div>
              </div>

              {/* Card 2: Sales Agent */}
              <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_14px_30px_rgba(15,23,42,0.14)] border border-white absolute top-32 -right-4 z-30">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1FF] text-[#1565D8] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Sales Agent
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Douala • 5.1 km
                  </div>
                </div>
              </div>

              {/* Card 3: IT Support */}
              <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_14px_30px_rgba(15,23,42,0.14)] border border-white absolute bottom-32 -right-6 z-30">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1FF] text-[#1565D8] flex items-center justify-center shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    IT Support
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Bafoussam • 3.8 km
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM 4-COLUMN FEATURE BAR ================= */}
        <section
          id="features"
          className="relative z-20 bg-white border-t border-slate-100 py-8 px-6"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#E8F1FF] text-[#1565D8] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 fill-[#1565D8] text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Location Based
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Find jobs near you, in your city or region.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#E8F1FF] text-[#1565D8] flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 fill-[#1565D8]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Fast &amp; Easy
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Apply in minutes with a simple and smooth process.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#E8F1FF] text-[#1565D8] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 fill-[#1565D8] text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Trusted Employers
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Work with verified companies across Cameroon.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#E8F1FF] text-[#1565D8] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 fill-[#1565D8]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  For Everyone
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Students, graduates, and professionals — all welcome.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= ROYAL BLUE FOOTER BAR ================= */}
      <footer className="bg-[#1565D8] text-white py-4 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <WakajobLogo white size="sm" />
            <span className="text-xs text-blue-100 font-medium">
              More jobs. A brighter future.
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-blue-100 font-medium">
            <span>Made for Cameroon</span>
            {/* Cameroon Flag SVG */}
            <span
              className="inline-flex w-5 h-3.5 rounded-[2px] overflow-hidden shadow-xs"
              aria-label="Cameroon Flag"
            >
              <span className="w-1/3 h-full bg-[#007A5E]" />
              <span className="w-1/3 h-full bg-[#CE1126] flex items-center justify-center">
                <span className="text-[#FCD116] text-[7px] leading-none">
                  ★
                </span>
              </span>
              <span className="w-1/3 h-full bg-[#FCD116]" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WakajobLandingPage;
export const Hero = WakajobLandingPage;