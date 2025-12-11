import Blog from "@/features/blog";
import { ErrorBoundary } from "@/components/error-boundary";

export default function BlogPage() {
  return (
    <ErrorBoundary>
      <Blog />
    </ErrorBoundary>
  );
}
