"use client";

import { Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/features/contact/constants";

export function FacebookButton() {
  const facebookUrl = `https://www.facebook.com/${contactInfo.facebook}`;

  return (
    <motion.a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[200px] right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
      aria-label="Follow us on Facebook"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Facebook className="h-7 w-7" />
    </motion.a>
  );
}

// Facebook link component for inline use
export function FacebookLink({
  username,
  children,
  className = "",
}: {
  username?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const facebookUsername = username || contactInfo.facebook;
  const facebookUrl = `https://www.facebook.com/${facebookUsername}`;

  return (
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Follow ${facebookUsername} on Facebook`}
    >
      {children}
    </a>
  );
}
