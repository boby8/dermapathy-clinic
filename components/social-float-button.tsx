"use client";

import { useState } from "react";
import { MessageCircle, Instagram, Facebook, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo } from "@/features/contact/constants";

// Format phone number for WhatsApp
const formatWhatsAppNumber = (phone: string) => {
  return phone.replace(/\s/g, "").replace(/\+/g, "");
};

const defaultMessage = encodeURIComponent(
  "Hello! I'm interested in learning more about your dermatology services. Can you please provide more information?"
);

export function SocialFloatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = formatWhatsAppNumber(contactInfo.phone);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
  const instagramUrl = `https://www.instagram.com/${contactInfo.instagram}/`;
  const facebookUrl = `https://www.facebook.com/${contactInfo.facebook}`;

  const socialButtons = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: whatsappUrl,
      color: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20BA5A]",
      delay: 0.1,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: instagramUrl,
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      hoverColor:
        "hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
      delay: 0.15,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: facebookUrl,
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#166FE5]",
      delay: 0.2,
    },
  ];

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Social Media Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="mb-4 flex flex-col gap-3">
            {socialButtons.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${social.color} text-white shadow-xl transition-all duration-300 ${social.hoverColor} hover:scale-110`}
                  aria-label={`${social.name}`}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ delay: social.delay, duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-slate-700 hover:bg-slate-800"
            : "bg-gradient-to-br from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700"
        } text-white`}
        aria-label={isOpen ? "Close social menu" : "Open social menu"}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
