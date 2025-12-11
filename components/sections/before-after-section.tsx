"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const previewImages = [
  {
    id: 1,
    before:
      "https://i.pinimg.com/736x/13/1b/e9/131be993259eeceb35a499f02377a389.jpg",
    after:
      "https://i.pinimg.com/736x/54/29/02/542902c998be3502c7181e724cd6a388.jpg",
  },
  {
    id: 2,
    before:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    before:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.03),transparent_70%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Results
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Real Transformations
          </h2>
          <p className="text-lg text-slate-600">
            Visible results achieved with expert dermatology care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {previewImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-lg ring-4 ring-slate-100 transition-all duration-500 hover:ring-sky-200 hover:shadow-2xl"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.before}
                  alt="Before treatment"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <Image
                  src={item.after}
                  alt="After treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 text-center text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider">
                  Before → After
                </div>
                <div className="text-xs opacity-90">
                  Swipe to see transformation
                </div>
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="shadow-lg">
            <Link href="/gallery">View Full Gallery →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
