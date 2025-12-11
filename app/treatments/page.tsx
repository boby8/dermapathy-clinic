"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const treatments = {
  all: [
    {
      title: "Chemical Peels",
      category: "skin",
      description: "Safe & effective exfoliation for glow and pigmentation.",
    },
    {
      title: "Laser Toning",
      category: "laser",
      description: "Advanced Q-switch technology for brightness.",
    },
    {
      title: "Hair PRP",
      category: "hair",
      description: "Growth stimulation for hair thinning and hair fall.",
    },
    {
      title: "Acne Scar Treatment",
      category: "skin",
      description: "Microneedling + Laser for deep scar reduction.",
    },
    {
      title: "Hair Transplant",
      category: "hair",
      description: "Permanent solution for hair loss and baldness.",
    },
    {
      title: "Botox & Fillers",
      category: "cosmetic",
      description: "Non-surgical anti-aging treatments.",
    },
    {
      title: "Laser Hair Removal",
      category: "laser",
      description: "Painless, long-lasting hair removal for all skin types.",
    },
    {
      title: "Hydrafacial",
      category: "cosmetic",
      description: "Deep cleansing and hydration treatment.",
    },
  ],
  skin: [
    {
      title: "Chemical Peels",
      description: "Safe & effective exfoliation for glow and pigmentation.",
    },
    {
      title: "Acne Scar Treatment",
      description: "Microneedling + Laser for deep scar reduction.",
    },
  ],
  hair: [
    {
      title: "Hair PRP",
      description: "Growth stimulation for hair thinning and hair fall.",
    },
    {
      title: "Hair Transplant",
      description: "Permanent solution for hair loss and baldness.",
    },
  ],
  laser: [
    {
      title: "Laser Toning",
      description: "Advanced Q-switch technology for brightness.",
    },
    {
      title: "Laser Hair Removal",
      description: "Painless, long-lasting hair removal for all skin types.",
    },
  ],
  cosmetic: [
    {
      title: "Botox & Fillers",
      description: "Non-surgical anti-aging treatments.",
    },
    {
      title: "Hydrafacial",
      description: "Deep cleansing and hydration treatment.",
    },
  ],
};

export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const getTreatments = () => {
    if (activeTab === "all") {
      return treatments.all;
    }
    return treatments[activeTab as keyof typeof treatments] || [];
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Our Treatments
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive dermatology solutions for all your needs
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="skin">Skin</TabsTrigger>
            <TabsTrigger value="hair">Hair</TabsTrigger>
            <TabsTrigger value="laser">Laser</TabsTrigger>
            <TabsTrigger value="cosmetic">Cosmetic Dermatology</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {getTreatments().map((treatment, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{treatment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {treatment.description}
                    </CardDescription>
                    <Button variant="outline" asChild>
                      <Link href="/appointment">Book Consultation</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
