import type { Metadata } from "next";
import Contact from "@/features/contact";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Contact Us | Dermapathy - Get in Touch",
  description:
    "Contact Dermapathy clinic in Lucknow. Reach out for appointments, consultations, or inquiries. We're here to help with all your dermatology needs.",
  openGraph: {
    title: "Contact Us | Dermapathy",
    description:
      "Contact Dermapathy clinic in Lucknow. Reach out for appointments and consultations.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <ErrorBoundary>
      <Contact />
    </ErrorBoundary>
  );
}
