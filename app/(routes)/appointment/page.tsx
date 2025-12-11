import Appointment from "@/features/appointment";
import { ErrorBoundary } from "@/components/error-boundary";

export default function AppointmentPage() {
  return (
    <ErrorBoundary>
      <Appointment />
    </ErrorBoundary>
  );
}
