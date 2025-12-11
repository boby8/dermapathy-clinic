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
import { skinConcerns, hairConcerns } from "./constants";

export function ConcernsSection() {
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

  const allConcerns = [...skinConcerns, ...hairConcerns];
  const selected = allConcerns.find((c) => c.id === selectedConcern);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Concerns Related to Skin & Hair
          </h2>
          <p className="text-lg text-gray-600">
            Select your concern to find the best treatment solutions
          </p>
        </div>

        <Tabs defaultValue="skin" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger value="skin">Skin Concerns</TabsTrigger>
            <TabsTrigger value="hair">Hair Concerns</TabsTrigger>
          </TabsList>

          <TabsContent value="skin" className="mt-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skinConcerns.map((concern) => (
                <Card
                  key={concern.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedConcern === concern.id
                      ? "border-2 border-primary shadow-md"
                      : ""
                  }`}
                  onClick={() => setSelectedConcern(concern.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{concern.name}</CardTitle>
                    <CardDescription>{concern.description}</CardDescription>
                  </CardHeader>
                  {selectedConcern === concern.id && (
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">
                          Recommended Treatments:
                        </p>
                        <ul className="space-y-1">
                          {concern.treatments.map((treatment, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              • {treatment}
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          variant="outline"
                          className="mt-4 w-full"
                        >
                          <Link href="/treatments">View Treatments</Link>
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hair" className="mt-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hairConcerns.map((concern) => (
                <Card
                  key={concern.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedConcern === concern.id
                      ? "border-2 border-primary shadow-md"
                      : ""
                  }`}
                  onClick={() => setSelectedConcern(concern.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{concern.name}</CardTitle>
                    <CardDescription>{concern.description}</CardDescription>
                  </CardHeader>
                  {selectedConcern === concern.id && (
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">
                          Recommended Treatments:
                        </p>
                        <ul className="space-y-1">
                          {concern.treatments.map((treatment, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              • {treatment}
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          variant="outline"
                          className="mt-4 w-full"
                        >
                          <Link href="/treatments">View Treatments</Link>
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
