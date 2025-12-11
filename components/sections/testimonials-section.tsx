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
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Patient Reviews
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            What Our Patients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border-2 border-slate-100 transition-all duration-300 hover:border-sky-200 hover:shadow-xl"
            >
              <CardContent className="pt-6">
                <div className="mb-4 text-3xl text-sky-200">&ldquo;</div>
                <p className="mb-6 leading-relaxed text-slate-600">
                  {testimonial.text}
                </p>
                <p className="font-bold text-slate-900">
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
