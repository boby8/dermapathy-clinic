"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
import { experts } from "./constants";

export default function Experts() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Meet Our Experts
          </h1>
          <p className="text-lg text-gray-600">
            Our team of experienced dermatologists dedicated to your skin and
            hair health
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, index) => {
            const Icon = expert.icon;
            return (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-blue-50">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Users className="h-16 w-16 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-center">{expert.name}</CardTitle>
                    <CardDescription className="text-center">
                      {expert.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mb-4 space-y-2">
                      {expert.qualifications.map((qual, idx) => (
                        <p
                          key={idx}
                          className="text-sm font-medium text-gray-700"
                        >
                          {qual}
                        </p>
                      ))}
                    </div>
                    <p className="mb-2 text-sm font-semibold text-primary">
                      {expert.specialization}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {expert.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
