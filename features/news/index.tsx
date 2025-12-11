"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { newsItems } from "./constants";

export function NewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            We&apos;re in the News
          </h2>
          <p className="text-lg text-gray-600">
            Recognition and features from leading publications
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="flex h-32 items-center justify-center p-4">
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold text-gray-500">
                      {item.source}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Dermapathy
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
