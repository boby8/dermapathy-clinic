"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "./constants";

export default function Contact() {
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      value: `${contactInfo.phone}, ${contactInfo.phone2}`,
      delay: 0,
    },
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      delay: 0.1,
    },
    {
      icon: Clock,
      title: "Timings",
      value: contactInfo.timings,
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Address",
      value: contactInfo.address,
      delay: 0.3,
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;re here to help with all your dermatology needs
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
              >
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-0">
              <div className="h-96 w-full bg-gray-200">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                    <p className="text-gray-600">Map Placeholder</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
