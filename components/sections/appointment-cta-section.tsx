"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

export function AppointmentCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-600 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
            Ready for Healthy Skin & Hair?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 lg:text-xl">
            Book your consultation today and take the first step towards
            healthier, glowing skin and hair.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-sky-600 shadow-xl hover:bg-white/90 hover:scale-105 hover:shadow-2xl"
          >
            <Link href="/appointment">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment Now
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
