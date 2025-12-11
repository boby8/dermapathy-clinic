"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Droplets, Award, Scissors } from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    title: "Acne & Scar Treatment",
    description: "Advanced solutions for active acne, scars, and pigmentation.",
  },
  {
    icon: Droplets,
    title: "Hair Fall & PRP Treatment",
    description:
      "Clinically proven procedures to boost hair strength and regrowth.",
  },
  {
    icon: Award,
    title: "Anti-Aging & Glow Treatments",
    description: "Rejuvenation, chemical peels, laser toning, and more.",
  },
  {
    icon: Scissors,
    title: "Laser Hair Removal",
    description: "Painless, long-lasting hair removal for all skin types.",
  },
];

export function TreatmentsOverviewSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Our Treatments
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions for all your skin and hair concerns
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{treatment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {treatment.description}
                  </CardDescription>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/treatments">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
