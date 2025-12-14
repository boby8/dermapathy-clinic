import type { Metadata } from "next";
import Products from "@/features/products";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Products | Dermapathy - Dermatologist-Approved Skincare & Haircare",
  description:
    "Shop dermatologist-approved skincare and haircare products. Premium quality products for healthy skin and hair including sunscreens, serums, and supplements.",
  keywords: [
    "skincare products",
    "haircare products",
    "sunscreen",
    "serum",
    "dermatologist approved",
  ],
  openGraph: {
    title: "Products | Dermapathy",
    description: "Shop dermatologist-approved skincare and haircare products.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <ErrorBoundary>
      <Products />
    </ErrorBoundary>
  );
}
