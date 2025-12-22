"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Droplets, Scissors, Heart, FileText } from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    title: "Skin Care",
    subtitle: "The Smooth Skin",
    description: "Advanced solutions for active acne, scars, and pigmentation.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
  },
  {
    icon: Droplets,
    title: "Hair Care",
    subtitle: "Hair Fall Solutions",
    description:
      "Clinically proven procedures to boost hair strength and regrowth.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
  },
  {
    icon: Scissors,
    title: "Laser Treatments",
    subtitle: "Laser Hair Removal, tattoo Removal",
    description: "Painless, long-lasting hair removal for all skin types.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
  },
  {
    icon: Heart,
    title: "Sexual Disorders",
    subtitle: "Sexual Problems",
    description:
      "Comprehensive treatment for sexually transmitted diseases and related conditions.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
  },
  {
    icon: FileText,
    title: "Nails & Leprosy",
    subtitle: "Problems Related to Nails",
    description:
      "Expert care for nail diseases and comprehensive leprosy treatment.",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop",
  },
];

export function TreatmentsOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50/50 to-white py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700"
          >
            Our Services
          </motion.div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Special High-quality Services
          </h2>
          <p className="text-lg text-slate-600">
            A one-stop solution for the treatment of skin, hair, nails, sexual
            disorders and leprosy
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group h-full overflow-hidden border-2 border-slate-100 transition-all duration-300 hover:border-sky-200 hover:shadow-xl">
                  <div className="relative h-48 w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 4px 6px -1px rgba(14, 165, 233, 0.3)",
                          "0 10px 15px -3px rgba(14, 165, 233, 0.4)",
                          "0 4px 6px -1px rgba(14, 165, 233, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600 shadow-lg backdrop-blur-sm"
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">
                      {treatment.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-slate-600">
                      {treatment.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm text-slate-600">
                      {treatment.description}
                    </CardDescription>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="link"
                        className="p-0 text-sky-600 hover:text-sky-700"
                        asChild
                      >
                        <Link href="/treatments">Learn More →</Link>
                      </Button>
                    </motion.div>
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
