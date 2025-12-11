import Gallery from "@/features/gallery";
import { ErrorBoundary } from "@/components/error-boundary";

export default function GalleryPage() {
  return (
    <ErrorBoundary>
      <Gallery />
    </ErrorBoundary>
  );
}
