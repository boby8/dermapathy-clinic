import type { Metadata } from "next";
import Experts from "@/features/experts";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Our Experts | Dermapathy - Meet Dr. Isha Singh",
  description:
    "Meet our team of expert dermatologists led by Dr. Isha Singh. Experienced professionals dedicated to providing the best skin and hair care treatments.",
  openGraph: {
    title: "Our Experts | Dermapathy",
    description:
      "Meet our team of expert dermatologists led by Dr. Isha Singh.",
    type: "website",
  },
};

export default function ExpertsPage() {
  return (
    <ErrorBoundary>
      <Experts />
    </ErrorBoundary>
  );
}
