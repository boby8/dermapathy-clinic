"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/treatments", label: "Treatments" },
    { href: "/products", label: "Products" },
    { href: "/experts", label: "Our Experts" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md supports-backdrop-filter:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/clinic-logo.png"
              alt="Dermapathy Clinic Logo"
              width={150}
              height={50}
              className="h-12 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold"
                      : "text-slate-700 hover:text-sky-600 hover:border-b-2 hover:border-sky-200 pb-1"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild>
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="w-full">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
