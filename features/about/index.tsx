"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { values } from "./constant.ts";

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            About Dr. Isha Singh
          </h1>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-[500px]"
          >
            {/* Modern image container with layered effects */}
            <div className="relative h-full w-full">
              {/* Decorative background shape */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-gradient-to-br from-sky-200/30 to-cyan-200/30"></div>

              {/* Main image container */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-4 ring-sky-100/50">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-cyan-400/10 z-10"></div>

                {/* Image */}
                <Image
                  src="/dr.png"
                  alt="Dr. Isha Singh"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Modern corner accent */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-sky-500/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-3 shadow-xl ring-4 ring-sky-50">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-700">
                    Certified Dermatologist
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Dr. Isha Singh is a dermatologist specializing in skin disorders,
              cosmetic dermatology, and hair treatments. With extensive clinical
              experience, she provides results-driven solutions with a
              compassionate approach.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Her commitment to excellence and patient care has helped thousands
              achieve healthier skin and hair. She stays updated with the latest
              advancements in dermatology to offer the best treatment options.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 text-center shadow-md transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
              >
                <div className="mb-2 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-4xl font-extrabold text-transparent">
                  10+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 text-center shadow-md transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
              >
                <div className="mb-2 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-4xl font-extrabold text-transparent">
                  5000+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Happy Patients
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Core Values</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <value.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
