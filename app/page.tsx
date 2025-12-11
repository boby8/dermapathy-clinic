"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  Heart,
  Award,
  Users,
  Scissors,
  Droplets,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Doctor Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-96 lg:h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-white">
                    <Users className="h-12 w-12" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Doctor Photo Placeholder
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Meet Dr. [Doctor Name]
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Dr. [Name] is a certified dermatologist specializing in advanced
                skin, hair, and cosmetic treatments with over 8+ years of
                experience in clinical dermatology. Her approach combines modern
                techniques with personalized care.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    30+
                  </div>
                  <div className="text-sm text-gray-600">
                    Skin & Hair Treatments
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    Certified
                  </div>
                  <div className="text-sm text-gray-600">Dermatologist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Overview Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Treatments
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for all your skin and hair concerns
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle>Acne & Scar Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Advanced solutions for active acne, scars, and pigmentation.
                </CardDescription>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/treatments">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Droplets className="h-6 w-6" />
                </div>
                <CardTitle>Hair Fall & PRP Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Clinically proven procedures to boost hair strength and
                  regrowth.
                </CardDescription>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/treatments">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle>Anti-Aging & Glow Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Rejuvenation, chemical peels, laser toning, and more.
                </CardDescription>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/treatments">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Scissors className="h-6 w-6" />
                </div>
                <CardTitle>Laser Hair Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Painless, long-lasting hair removal for all skin types.
                </CardDescription>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/treatments">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Preview */}
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

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-600">
                  &quot;Dr. [Name] is amazing! My acne reduced drastically in
                  just 2 sessions.&quot;
                </p>
                <p className="font-semibold text-gray-900">– Priya S.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-600">
                  &quot;Best clinic for laser hair removal. Very clean and
                  professional.&quot;
                </p>
                <p className="font-semibold text-gray-900">– Aditi K.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-600">
                  &quot;My hair fall stopped after PRP sessions. Highly
                  recommended.&quot;
                </p>
                <p className="font-semibold text-gray-900">– Neha R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            Ready for Healthy Skin & Hair?
          </h2>
          <Button asChild size="lg" variant="secondary">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
