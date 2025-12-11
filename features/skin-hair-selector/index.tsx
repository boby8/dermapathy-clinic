"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50/50 to-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Personalized Care
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Tailored Skin & Hair Care Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Checkout the best products according to your needs. Need more help?
            Consult a dermatologist at just 500/-
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
                  className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-xl ${
                    selectedSkinType === type.id
                      ? "border-sky-500 bg-gradient-to-br from-sky-50 to-cyan-50 shadow-lg ring-2 ring-sky-200"
                      : "border-slate-100 hover:border-sky-200"
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
                  className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-xl ${
                    selectedHairType === type.id
                      ? "border-sky-500 bg-gradient-to-br from-sky-50 to-cyan-50 shadow-lg ring-2 ring-sky-200"
                      : "border-slate-100 hover:border-sky-200"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="shadow-lg">
            <Link href="/appointment">Book Consultation (₹299/-)</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
