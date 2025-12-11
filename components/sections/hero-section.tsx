"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
              Advanced Dermatology Care
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent lg:text-6xl">
              Transforming Skin & Hair With Advanced Dermatology
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-600 lg:text-xl">
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
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-4 ring-sky-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-cyan-400/20"></div>
              <Image
                src="/dr.png"
                alt="Doctor"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 opacity-20 blur-3xl lg:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
