import type { Metadata } from "next";
import About from "@/features/about";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "About Us | Dermapathy - Expert Dermatology Care",
  description:
    "Learn about Dermapathy clinic, led by renowned dermatologist Dr. Isha Singh. Discover our commitment to excellence in skin and hair care treatments.",
  openGraph: {
    title: "About Us | Dermapathy",
    description:
      "Learn about Dermapathy clinic, led by renowned dermatologist Dr. Isha Singh.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <About />
    </ErrorBoundary>
  );
}
