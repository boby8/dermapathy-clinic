"use client";

import { Users } from "lucide-react";

export function DoctorIntroSection() {
  return (
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
                <div className="mb-2 text-3xl font-bold text-primary">30+</div>
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
  );
}
