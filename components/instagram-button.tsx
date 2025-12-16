"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/features/contact/constants";

export function InstagramButton() {
  const instagramUrl = `https://www.instagram.com/${contactInfo.instagram}/`;

  return (
    <motion.a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50"
      aria-label="Follow us on Instagram"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Instagram className="h-7 w-7" />
    </motion.a>
  );
}

// Instagram link component for inline use
export function InstagramLink({
  username,
  children,
  className = "",
}: {
  username?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const instagramUsername = username || contactInfo.instagram;
  const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;

  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Follow ${instagramUsername} on Instagram`}
    >
      {children}
    </a>
  );
}
