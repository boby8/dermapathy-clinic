"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { AppointmentCTASection } from "@/components/sections/appointment-cta-section";
import { FeatureFilter } from "@/components/feature-filter";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { FAQSection } from "@/components/sections/faq-section";
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
      <WhyChooseSection />
      <FeaturedProducts />
      <SkinHairSelector />
      <FeatureFilter />
      <ConcernsSection />
      <NewsSection />
      <FAQSection />
      <AppointmentCTASection />
    </div>
  );
}
