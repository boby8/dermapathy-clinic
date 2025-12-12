"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Will my treatment results look natural?",
    answer:
      "Yes! We design your treatment to match your natural features, ensuring a seamless and undetectable result that blends perfectly with your existing skin and hair.",
  },
  {
    question: "Are the results permanent?",
    answer:
      "Results vary by treatment type. Some treatments like hair transplants provide permanent results, while others like skin treatments may require maintenance sessions. Our doctor will discuss the expected duration during your consultation.",
  },
  {
    question: "Which techniques do you use?",
    answer:
      "We use advanced, minimally invasive techniques including PRP, laser treatments, micro-needling, and other cutting-edge dermatology procedures. All procedures are performed by qualified doctors using the latest technology.",
  },
  {
    question: "Who performs the procedures?",
    answer:
      "All procedures are performed exclusively by our experienced, qualified dermatologists. We do not delegate critical steps to technicians or nurses, ensuring your safety and the best possible results.",
  },
  {
    question: "What is the cost of the procedure?",
    answer:
      "The cost depends entirely on your specific condition, desired results, and treatment plan. We provide a detailed analysis during your consultation with transparent pricing. Costs typically start from ₹5,000 and vary based on treatment complexity.",
  },
  {
    question: "Do I need to take medications after the procedure?",
    answer:
      "Our advanced, doctor-led techniques minimize the need for long-term medications. Most patients require minimal or no medications post-procedure. We focus on durable, natural results with minimal downtime.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.03),transparent_70%)]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Common Questions
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Get answers to common questions about our dermatology procedures
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-slate-100 bg-white transition-all duration-300 hover:border-sky-200 hover:shadow-lg">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <h3 className="pr-8 text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-sky-600 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

