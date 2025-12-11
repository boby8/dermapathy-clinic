"use client";

import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = Array.from({ length: 9 }, (_, i) => i + 1);

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
          {images.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 overflow-hidden rounded-lg bg-gray-200"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-gray-500">
                    Before
                  </div>
                  <div className="h-32 w-32 rounded bg-gray-300"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex translate-x-full items-center justify-center bg-gray-300 transition-transform duration-300 group-hover:translate-x-0">
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-gray-500">
                    After
                  </div>
                  <div className="h-32 w-32 rounded bg-gray-400"></div>
                </div>
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
