import type { Metadata } from "next";
import Blog from "@/features/blog";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Blog | Dermapathy - Skin & Hair Care Tips & Articles",
  description:
    "Read expert articles and tips on skin care, hair care, and dermatology. Stay informed about the latest in dermatology treatments and skincare routines.",
  openGraph: {
    title: "Blog | Dermapathy",
    description:
      "Read expert articles and tips on skin care, hair care, and dermatology.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <ErrorBoundary>
      <Blog />
    </ErrorBoundary>
  );
}
