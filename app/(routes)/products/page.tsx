import Products from "@/features/products";
import { ErrorBoundary } from "@/components/error-boundary";

export default function ProductsPage() {
  return (
    <ErrorBoundary>
      <Products />
    </ErrorBoundary>
  );
}
