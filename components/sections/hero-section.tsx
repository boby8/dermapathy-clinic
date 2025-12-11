"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Transforming Skin & Hair With Advanced Dermatology
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Get personalized, safe, and effective treatments backed by
              experience and latest technology.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link href="/treatments">View Treatments</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Heart className="h-16 w-16" />
                </div>
                <p className="text-sm text-gray-600">
                  Doctor Image Placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
