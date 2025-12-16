"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-button";
import { InstagramLink } from "@/components/instagram-button";
import { FacebookLink } from "@/components/facebook-button";
import { ContactForm } from "@/components/contact-form";
import { AppointmentCTASection } from "@/components/sections/appointment-cta-section";
import { contactInfo } from "./constants";

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      content: (
        <div className="space-y-1 text-sm text-slate-600">
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.phone2}</p>
        </div>
      ),
      delay: 0,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: (
        <WhatsAppLink>
          <Button
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
            size="sm"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat Now
          </Button>
        </WhatsAppLink>
      ),
      delay: 0.1,
      isSocial: true,
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: (
        <InstagramLink>
          <Button
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white"
            size="sm"
          >
            <Instagram className="mr-2 h-4 w-4" />
            Follow Us
          </Button>
        </InstagramLink>
      ),
      delay: 0.15,
      isSocial: true,
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: (
        <FacebookLink>
          <Button
            className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
            size="sm"
          >
            <Facebook className="mr-2 h-4 w-4" />
            Like Us
          </Button>
        </FacebookLink>
      ),
      delay: 0.2,
      isSocial: true,
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a
          href={`mailto:${contactInfo.email}`}
          className="block text-sm text-sky-600 hover:text-sky-700 hover:underline transition-colors break-all"
        >
          {contactInfo.email}
        </a>
      ),
      delay: 0.25,
    },
    {
      icon: Clock,
      title: "Timings",
      content: (
        <div className="text-sm text-slate-600">
          <p>{contactInfo.timings}</p>
          <p className="text-xs text-slate-500 mt-1">Monday to Saturday</p>
        </div>
      ),
      delay: 0.3,
    },
    {
      icon: MapPin,
      title: "Address",
      content: (
        <p className="text-sm leading-relaxed text-slate-600">
          {contactInfo.address}
        </p>
      ),
      delay: 0.35,
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

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg border-slate-200">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          item.title === "WhatsApp"
                            ? "bg-[#25D366] text-white"
                            : item.title === "Instagram"
                            ? "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white"
                            : item.title === "Facebook"
                            ? "bg-[#1877F2] text-white"
                            : "bg-sky-100 text-sky-600"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-3">{item.content}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form and Map Section */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-slate-200 shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d81.0202361!3d26.8665567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be30036c33b61%3A0xf2ac5b8378e8e52e!2sDr.%20Isha%20Singh%27s%20Dermapathy%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dermapathy Skin Clinic Location"
                    aria-label="Interactive map showing the location of Dermapathy Skin Clinic at 1/44 First Floor, opposite Ipsum Diagnostics, Vijayant Khand, Gomti Nagar, Lucknow"
                    className="absolute inset-0"
                  />
                  <div className="absolute bottom-4 right-4 z-10">
                    <a
                      href="https://www.google.com/maps/place/Dr.+Isha+Singh's+Dermapathy+Skin+Clinic/@26.8663766,81.0081903,16z/data=!4m10!1m2!2m1!1sdermapathy!3m6!1s0x399be30036c33b61:0xf2ac5b8378e8e52e!8m2!3d26.8665567!4d81.0202361!15sCgpkZXJtYXBhdGh5WgwiCmRlcm1hcGF0aHmSAQ1kZXJtYXRob2xvZ2lzdOABAA!16s%2Fg%2F11xzrvf2g_?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-sky-600 shadow-lg hover:bg-sky-50 transition-colors"
                      aria-label="Open Dermapathy Skin Clinic location in Google Maps"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Appointment CTA Section */}
        <AppointmentCTASection />
      </div>
    </div>
  );
}
