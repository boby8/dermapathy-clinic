"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/features/contact/constants";

// Format phone number for WhatsApp (remove spaces, +, etc.)
const formatWhatsAppNumber = (phone: string) => {
  return phone.replace(/\s/g, "").replace(/\+/g, "");
};

// Default WhatsApp message
const defaultMessage = encodeURIComponent(
  "Hello! I'm interested in learning more about your dermatology services. Can you please provide more information?"
);

export function WhatsAppButton() {
  const whatsappNumber = formatWhatsAppNumber(contactInfo.phone);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
        1
      </span>
    </motion.a>
  );
}

// WhatsApp link component for inline use
export function WhatsAppLink({
  phone,
  message,
  children,
  className = "",
}: {
  phone?: string;
  message?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const phoneNumber = phone
    ? formatWhatsAppNumber(phone)
    : formatWhatsAppNumber(contactInfo.phone);
  const msg = message ? encodeURIComponent(message) : defaultMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${msg}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Chat on WhatsApp"
    >
      {children}
    </a>
  );
}
