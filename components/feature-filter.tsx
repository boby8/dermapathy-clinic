"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DoctorIntroSection } from "@/components/sections/doctor-intro-section";
import { TreatmentsOverviewSection } from "@/components/sections/treatments-overview-section";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutSection } from "@/components/sections/about-section";

type FilterOption = "all" | "about" | "treatments" | "gallery" | "testimonials";

export function FeatureFilter() {
  const [activeTab, setActiveTab] = useState<FilterOption>("all");

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <div className="space-y-20">
            <DoctorIntroSection />
            <TreatmentsOverviewSection />
            <BeforeAfterSection />
            <TestimonialsSection />
          </div>
        );
      case "about":
        return <AboutSection />;
      case "treatments":
        return <TreatmentsOverviewSection />;
      case "gallery":
        return <BeforeAfterSection />;
      case "testimonials":
        return <TestimonialsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as FilterOption)}
        className="w-full"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="treatments">Treatments</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          {renderContent()}
        </TabsContent>
      </Tabs>
    </div>
  );
}
