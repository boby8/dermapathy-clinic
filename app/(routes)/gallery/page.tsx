import type { Metadata } from "next";
import Gallery from "@/features/gallery";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Gallery | Dermapathy - Before & After Treatment Results",
  description:
    "View our treatment gallery showcasing before and after results. See real patient transformations from our dermatology procedures.",
  openGraph: {
    title: "Gallery | Dermapathy",
    description:
      "View our treatment gallery showcasing before and after results.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <ErrorBoundary>
      <Gallery />
    </ErrorBoundary>
  );
}
