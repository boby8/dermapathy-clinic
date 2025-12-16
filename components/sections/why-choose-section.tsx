"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Stethoscope,
  Shield,
  Sparkles,
  Heart,
  DollarSign,
  GraduationCap,
  CheckCircle,
  Sparkles as SparklesIcon,
  Droplet,
  FileCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: DollarSign,
    value: "Very",
    label: "Affordable Cost",
    description: "World-class patient care at very affordable prices",
  },
  {
    icon: GraduationCap,
    value: "Highly",
    label: "Qualified Dermatologists",
    description: "Expert medical dermatologists with extensive experience",
  },
  {
    icon: CheckCircle,
    value: "US-FDA",
    label: "Approved Lasers",
    description: "All equipment meets best international standards",
  },
  {
    icon: Award,
    value: "World",
    label: "Class Treatments",
    description: "Premium quality care with latest technology",
  },
  {
    icon: Droplet,
    value: "Most",
    label: "Hygienic Clinic",
    description: "Maintaining highest standards of cleanliness and safety",
  },
  {
    icon: FileCheck,
    value: "Highly",
    label: "Standardized Protocols",
    description: "Consistent, proven treatment protocols for best results",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50/50 to-white py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Why Choose Us
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Excellence in Every Treatment
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Our commitment to quality, safety, and patient satisfaction sets us
            apart
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 transition-all duration-300 hover:border-sky-200 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600 shadow-md">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-2xl font-extrabold text-transparent">
                          {feature.value}
                        </div>
                        <div className="text-sm font-semibold text-slate-700">
                          {feature.label}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
