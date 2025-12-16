import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { WhatsAppLink } from "@/components/whatsapp-button";
import { InstagramLink } from "@/components/instagram-button";
import { FacebookLink } from "@/components/facebook-button";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/clinic-logo.png"
                alt="Dermapathy Clinic Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-600">
              Advanced skin & hair care clinic providing personalized treatments
              with modern technology.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-base font-bold text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Our Experts
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-base font-bold text-slate-900">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Acne & Scar Treatment</li>
              <li>Hair Fall & PRP</li>
              <li>Anti-Aging Treatments</li>
              <li>Laser Hair Removal</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-base font-bold text-slate-900">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>+91 9650821800</li>
              <li>+91 9140090880</li>
              <li>
                <WhatsAppLink>
                  <span className="flex items-center gap-2 hover:text-[#25D366] transition-colors cursor-pointer">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </span>
                </WhatsAppLink>
              </li>
              <li>
                <InstagramLink>
                  <span className="flex items-center gap-2 hover:text-pink-600 transition-colors cursor-pointer">
                    <Instagram className="h-4 w-4" />
                    Follow on Instagram
                  </span>
                </InstagramLink>
              </li>
              <li>
                <FacebookLink>
                  <span className="flex items-center gap-2 hover:text-[#1877F2] transition-colors cursor-pointer">
                    <Facebook className="h-4 w-4" />
                    Like on Facebook
                  </span>
                </FacebookLink>
              </li>
              <li>
                <a
                  href="mailto:clinic@example.com"
                  className="hover:text-sky-600 transition-colors"
                  aria-label="Email us at clinic@example.com"
                >
                  clinic@example.com
                </a>
              </li>
              <li>11 AM - 05 PM</li>
              <li>1/44 First Floor, opposite Ipsum Diagnostics</li>
              <li>Vijayant Khand, Gomti Nagar</li>
              <li>LUCKNOW</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2024 Dermapathy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
