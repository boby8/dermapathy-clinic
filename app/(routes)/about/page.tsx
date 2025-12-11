import About from "@/features/about";
import { ErrorBoundary } from "@/components/error-boundary";

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <About />
    </ErrorBoundary>
  );
}
