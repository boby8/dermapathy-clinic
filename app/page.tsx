import type { Metadata } from "next";
import Home from "@/features/home";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Dermapathy - Advanced Skin & Hair Care Clinic | Expert Dermatology",
  description:
    "Get personalized, safe, and effective skin & hair treatments backed by experience and latest technology. Led by renowned dermatologist Dr. Isha Singh.",
  keywords: [
    "dermatology",
    "skin care",
    "hair care",
    "dermatologist",
    "acne treatment",
    "hair fall treatment",
    "PRP",
    "Lucknow",
  ],
  openGraph: {
    title: "Dermapathy - Advanced Skin & Hair Care Clinic",
    description:
      "Get personalized, safe, and effective treatments backed by experience and latest technology.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dermapathy - Advanced Skin & Hair Care Clinic",
    description:
      "Get personalized, safe, and effective treatments backed by experience and latest technology.",
  },
};

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
