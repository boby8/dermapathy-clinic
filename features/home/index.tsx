"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { AppointmentCTASection } from "@/components/sections/appointment-cta-section";
import { FeatureFilter } from "@/components/feature-filter";
import { TrustBadges } from "@/features/trust-badges";
import { SkinHairSelector } from "@/features/skin-hair-selector";
import { ConcernsSection } from "@/features/concerns";
import { NewsSection } from "@/features/news";
import { FeaturedProducts } from "@/features/products/featured-products";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustBadges />
      <FeaturedProducts />
      <SkinHairSelector />
      <FeatureFilter />
      <ConcernsSection />
      <NewsSection />
      <AppointmentCTASection />
    </div>
  );
}
