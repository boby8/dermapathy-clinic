"use client";

import { motion } from "framer-motion";
import { trustBadges } from "./constants";

export function TrustBadges() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-sky-200 group-hover:to-cyan-200">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{badge.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
