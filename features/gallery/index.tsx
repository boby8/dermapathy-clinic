"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    before:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e785b?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
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
  {
    id: 4,
    before:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    before:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e785b?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    before:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop",
  },
  {
    id: 7,
    before:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    before:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
  },
  {
    id: 9,
    before:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
  },
];

export default function Gallery() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Before & After Results
          </h1>
          <p className="text-lg text-gray-600">
            Actual results from patients treated under expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.before}
                  alt="Before treatment"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                <Image
                  src={item.after}
                  alt="After treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center text-white">
                  <div className="text-lg font-semibold">Before | After</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
