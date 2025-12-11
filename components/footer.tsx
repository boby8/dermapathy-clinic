import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/clinic-logo.png"
                alt="Dermapathy Clinic Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain mb-4"
                unoptimized
              />
            </Link>
            <p className="text-sm text-gray-600">
              Advanced skin & hair care clinic providing personalized treatments
              with modern technology.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="text-gray-600 hover:text-primary"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="text-gray-600 hover:text-primary"
                >
                  Our Experts
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-primary"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Acne & Scar Treatment</li>
              <li>Hair Fall & PRP</li>
              <li>Anti-Aging Treatments</li>
              <li>Laser Hair Removal</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>+91 9650821800</li>
              <li>+91 9140090880</li>
              <li>clinic@example.com</li>
              <li>11 AM - 05 PM</li>
              <li>1/44 First Floor, opposite Ipsum Diagnostics</li>
              <li>Vijayant Khand, Gomti Nagar</li>
              <li>LUCKNOW</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 Dermapathy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
