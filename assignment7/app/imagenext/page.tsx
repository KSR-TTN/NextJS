"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";

// Load Roboto font with specific weight
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

// Dynamically import ImageGallery
const ImageGallery = dynamic(() => import("@/components/imagelist"), {
  ssr: false,
});

export default function HomePage() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${roboto.className}`}
    >
      <h1 className="text-2xl font-bold">Next.js Image Fetching</h1>

      <button
        className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setShowGallery(true)}
      >
        Show Images
      </button>

      {/* Load images dynamically */}
      {showGallery && <ImageGallery />}
    </div>
  );
}
