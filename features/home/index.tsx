"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { AppointmentCTASection } from "@/components/sections/appointment-cta-section";
import { FeatureFilter } from "@/components/feature-filter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeatureFilter />
      <AppointmentCTASection />
    </div>
  );
}
