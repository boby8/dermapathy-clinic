"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Shield } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Patient-First Care",
      description: "Your comfort and results are our top priority.",
    },
    {
      icon: Award,
      title: "Modern Technology",
      description: "Latest equipment and techniques for best outcomes.",
    },
    {
      icon: Shield,
      title: "Safety & Hygiene",
      description: "Strict protocols ensuring safe and clean environment.",
    },
    {
      icon: Users,
      title: "Personalized Treatment Plans",
      description: "Customized solutions tailored to your unique needs.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            About Dr. Isha Singh
          </h1>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Users className="h-16 w-16" />
                </div>
                <p className="text-sm text-gray-600">
                  Doctor Photo Placeholder
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Dr. [Name] is a dermatologist specializing in skin disorders,
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
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  5000+
                </div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
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
