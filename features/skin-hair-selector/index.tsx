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
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { skinTypes, hairTypes } from "./constants";

export function SkinHairSelector() {
  const [selectedSkinType, setSelectedSkinType] = useState<string | null>(null);
  const [selectedHairType, setSelectedHairType] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Tailored Skin & Hair Care Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Checkout the best products according to your needs. Need more help?
            Consult a dermatologist at just ₹249/-
          </p>
        </div>

        <Tabs defaultValue="skin" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger value="skin">Skin Type</TabsTrigger>
            <TabsTrigger value="hair">Hair Type</TabsTrigger>
          </TabsList>

          <TabsContent value="skin" className="mt-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skinTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedSkinType === type.id
                      ? "border-2 border-primary shadow-md"
                      : ""
                  }`}
                  onClick={() => setSelectedSkinType(type.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedSkinType === type.id && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">
                          Recommended Products:
                        </p>
                        <ul className="space-y-1">
                          {type.recommendations.map((rec, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-primary" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hair" className="mt-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {hairTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedHairType === type.id
                      ? "border-2 border-primary shadow-md"
                      : ""
                  }`}
                  onClick={() => setSelectedHairType(type.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedHairType === type.id && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">
                          Recommended Products:
                        </p>
                        <ul className="space-y-1">
                          {type.recommendations.map((rec, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-primary" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="/appointment">Book Consultation (₹249/-)</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
