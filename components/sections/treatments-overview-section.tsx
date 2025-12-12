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
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50/50 to-white py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Our Services
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Our Treatments
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive solutions for all your skin and hair concerns
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Card
                key={index}
                className="group border-2 border-slate-100 transition-all duration-300 hover:border-sky-200 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600 transition-transform duration-300 group-hover:scale-110 group-hover:from-sky-200 group-hover:to-cyan-200">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-slate-900">
                    {treatment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-slate-600">
                    {treatment.description}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="p-0 text-sky-600 hover:text-sky-700"
                    asChild
                  >
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
