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
    <section className="relative overflow-hidden bg-white py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.05),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Find Solutions
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Concerns Related to Skin & Hair
          </h2>
          <p className="text-lg text-slate-600">
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
                  className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-xl ${
                    selectedConcern === concern.id
                      ? "border-sky-500 bg-gradient-to-br from-sky-50 to-cyan-50 shadow-lg ring-2 ring-sky-200"
                      : "border-slate-100 hover:border-sky-200"
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
                  className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-xl ${
                    selectedConcern === concern.id
                      ? "border-sky-500 bg-gradient-to-br from-sky-50 to-cyan-50 shadow-lg ring-2 ring-sky-200"
                      : "border-slate-100 hover:border-sky-200"
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
