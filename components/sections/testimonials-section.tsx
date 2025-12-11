"use client";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "Dr. [Name] is amazing! My acne reduced drastically in just 2 sessions.",
    author: "Priya S.",
  },
  {
    text: "Best clinic for laser hair removal. Very clean and professional.",
    author: "Aditi K.",
  },
  {
    text: "My hair fall stopped after PRP sessions. Highly recommended.",
    author: "Neha R.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-600">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-semibold text-gray-900">
                  – {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
