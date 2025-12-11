import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Dermapathy</h3>
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
                  href="/gallery"
                  className="text-gray-600 hover:text-primary"
                >
                  Gallery
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
              <li>+91 9999999999</li>
              <li>clinic@example.com</li>
              <li>123, Skin Care Avenue</li>
              <li>City, India</li>
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
