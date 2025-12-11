"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { newsItems } from "./constants";

export function NewsSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Media Coverage
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            We&apos;re in the News
          </h2>
          <p className="text-lg text-slate-600">
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
              <Card className="group h-full border-2 border-slate-100 transition-all duration-300 hover:border-sky-200 hover:shadow-lg">
                <CardContent className="flex h-32 items-center justify-center p-4">
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold text-slate-500">
                      {item.source}
                    </div>
                    <div className="text-sm font-bold text-slate-900">
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
