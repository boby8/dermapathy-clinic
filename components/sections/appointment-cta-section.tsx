"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AppointmentCTASection() {
  return (
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
  );
}
