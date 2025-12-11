import Contact from "@/features/contact";
import { ErrorBoundary } from "@/components/error-boundary";

export default function ContactPage() {
  return (
    <ErrorBoundary>
      <Contact />
    </ErrorBoundary>
  );
}
