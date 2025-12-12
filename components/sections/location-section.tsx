"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.03),transparent_70%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Find Us
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Visit Our Clinic
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We&apos;re here to serve you with premium dermatology care
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Address</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="font-semibold">1/44 First Floor</p>
                  <p>Opposite Ipsum Diagnostics</p>
                  <p>Vijayant Khand, Gomti Nagar</p>
                  <p className="font-semibold text-slate-900">LUCKNOW</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Contact</h3>
                </div>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <p className="font-semibold text-slate-900">Phone:</p>
                    <p>+91 9650821800</p>
                    <p>+91 9140090880</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email:</p>
                    <p>clinic@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Card className="mx-auto max-w-md border-2 border-sky-100 bg-gradient-to-br from-sky-50 to-cyan-50">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600 shadow-md">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Timings</h3>
              <p className="mb-4 text-lg font-semibold text-sky-700">11 AM - 05 PM</p>
              <p className="text-sm text-slate-600">Monday to Saturday</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Button asChild size="lg" className="shadow-lg">
            <Link href="/contact">Get Directions →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


