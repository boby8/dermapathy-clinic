"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-button";
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
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us instantly",
      delay: 0.1,
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      delay: 0.2,
      links: [`mailto:${contactInfo.email}`],
    },
    {
      icon: Clock,
      title: "Timings",
      value: contactInfo.timings,
      delay: 0.3,
    },
    {
      icon: MapPin,
      title: "Address",
      value: contactInfo.address,
      delay: 0.4,
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

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const isWhatsApp = "isWhatsApp" in card && card.isWhatsApp;
            const hasLinks = "links" in card && card.links;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          isWhatsApp
                            ? "bg-[#25D366] text-white"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    {isWhatsApp ? (
                      <WhatsAppLink>
                        <Button
                          className="mt-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                          size="sm"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat Now
                        </Button>
                      </WhatsAppLink>
                    ) : card.title === "Phone" ? (
                      <div className="space-y-1 text-gray-600">
                        <p>{contactInfo.phone}</p>
                        <p>{contactInfo.phone2}</p>
                      </div>
                    ) : hasLinks && card.title === "Email" ? (
                      <a
                        href={card.links[0]}
                        className="block text-gray-600 hover:text-sky-600 transition-colors"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{card.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-0">
              <div className="relative h-96 w-full overflow-hidden rounded-lg">
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
        </div>
      </div>
    </div>
  );
}
