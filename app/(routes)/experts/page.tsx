import Experts from "@/features/experts";
import { ErrorBoundary } from "@/components/error-boundary";

export default function ExpertsPage() {
  return (
    <ErrorBoundary>
      <Experts />
    </ErrorBoundary>
  );
}
