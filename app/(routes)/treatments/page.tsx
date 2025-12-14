import type { Metadata } from "next";
import Treatments from "@/features/treatments";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Treatments | Dermapathy - Advanced Dermatology Procedures",
  description:
    "Explore our comprehensive range of skin and hair treatments including acne treatment, PRP, anti-aging, laser hair removal, and more. Doctor-led procedures with natural results.",
  keywords: [
    "acne treatment",
    "PRP therapy",
    "hair transplant",
    "laser hair removal",
    "anti-aging treatment",
    "skin treatment",
  ],
  openGraph: {
    title: "Treatments | Dermapathy",
    description:
      "Explore our comprehensive range of skin and hair treatments with doctor-led procedures.",
    type: "website",
  },
};

export default function TreatmentsPage() {
  return (
    <ErrorBoundary>
      <Treatments />
    </ErrorBoundary>
  );
}
