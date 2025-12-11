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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Real Transformations
          </h2>
          <p className="text-lg text-gray-600">
            Visible results achieved with expert dermatology care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {previewImages.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.before}
                  alt="Before treatment"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                <Image
                  src={item.after}
                  alt="After treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                Before | After
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
