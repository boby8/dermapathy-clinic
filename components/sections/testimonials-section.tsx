"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Dr. Isha Singh and her team are extremely professional and warm. My post-treatment results have been fantastic!",
    author: "Priya S.",
    rating: 5,
  },
  {
    text: "Excellent service and incredible results. I love the density and natural look.",
    author: "Aditi K.",
    rating: 5,
  },
  {
    text: "The experience was seamless from start to finish. My results have surpassed my expectations!",
    author: "Neha R.",
    rating: 5,
  },
  {
    text: "Extremely happy with my progress at Dermapathy. Their expertise and approach are outstanding!",
    author: "Riya M.",
    rating: 5,
  },
  {
    text: "Got amazing results for my skin pigmentation. Highly satisfied with the treatment!",
    author: "Sneha P.",
    rating: 5,
  },
  {
    text: "Best dermatologist in town. Very knowledgeable and patient-friendly. Highly recommended!",
    author: "Ananya K.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here (lower = slower)

    const scroll = () => {
      scrollPosition += scrollSpeed;
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollPosition >= maxScroll) {
        scrollPosition = 0; // Reset to start for infinite loop
      }

      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50/50 to-white py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Patient Reviews
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            What Our Patients Say
          </h2>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scrollbar-hide"
            style={{
              scrollBehavior: "auto",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-full md:w-[400px]"
              >
                <Card className="h-full border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="mb-4 text-4xl text-sky-200">&ldquo;</div>
                    <p className="mb-6 leading-relaxed text-slate-600 text-lg">
                      {testimonial.text}
                    </p>
                    <p className="font-bold text-slate-900 text-base">
                      – {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sky-50 via-sky-50/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sky-50 via-sky-50/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
