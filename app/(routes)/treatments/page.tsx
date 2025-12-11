import Treatments from "@/features/treatments";
import { ErrorBoundary } from "@/components/error-boundary";

export default function TreatmentsPage() {
  return (
    <ErrorBoundary>
      <Treatments />
    </ErrorBoundary>
  );
}
