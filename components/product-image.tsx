"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface ProductImageProps {
  src?: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="flex h-full items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <ShoppingCart className="h-8 w-8" />
          </div>
          <p className="text-xs text-gray-500">Product Image</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setHasError(true)}
    />
  );
}
