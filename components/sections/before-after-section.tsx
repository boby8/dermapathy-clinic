"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function BeforeAfterSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Real Transformations
          </h2>
          <p className="text-lg text-gray-600">
            Visible results achieved with expert dermatology care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative h-64 overflow-hidden rounded-lg bg-gray-200"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-gray-500">
                    Before
                  </div>
                  <div className="h-32 w-32 rounded bg-gray-300"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex translate-x-full items-center justify-center bg-gray-300 transition-transform duration-300 group-hover:translate-x-0">
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-gray-500">
                    After
                  </div>
                  <div className="h-32 w-32 rounded bg-gray-400"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                Before | After
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
