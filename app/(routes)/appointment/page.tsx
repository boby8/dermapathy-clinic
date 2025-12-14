import type { Metadata } from "next";
import Appointment from "@/features/appointment";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Book Appointment | Dermapathy - Schedule Your Consultation",
  description:
    "Book an appointment with Dermapathy clinic. Fill in your details and our expert dermatologists will reach out to confirm your consultation.",
  openGraph: {
    title: "Book Appointment | Dermapathy",
    description:
      "Book an appointment with Dermapathy clinic. Schedule your consultation today.",
    type: "website",
  },
};

export default function AppointmentPage() {
  return (
    <ErrorBoundary>
      <Appointment />
    </ErrorBoundary>
  );
}
