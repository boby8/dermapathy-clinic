"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Stethoscope } from "lucide-react";

export function DoctorIntroSection() {
  const stats = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Stethoscope, value: "30+", label: "Skin & Hair Treatments" },
    { icon: Award, value: "Certified", label: "Dermatologist" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.05),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-[450px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-sky-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-cyan-400/20"></div>
              <Image
                src="/dr.png"
                alt="Doctor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 opacity-20 blur-3xl lg:block"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
              Expert Care
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent lg:text-5xl">
              Meet Dr. Isha Singh
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-600 lg:text-xl">
              Dr. Isha Singh is a certified dermatologist specializing in
              advanced skin, hair, and cosmetic treatments with over 10+ years
              of experience in clinical dermatology. Her approach combines
              modern techniques with personalized care.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group rounded-xl border-2 border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mb-2 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-3xl font-extrabold text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
