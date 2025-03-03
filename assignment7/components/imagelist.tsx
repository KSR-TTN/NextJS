"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageData {
  id: string;
  author: string;
  download_url: string;
}

export default function ImageGallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        console.log("Fetched Images:", data);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {images.length === 0 && <p className="text-white">No images found</p>}
      {images.map((image) => (
        <div key={image.id} className="relative w-full h-[300px]">
          <Image
            src={image.download_url}
            alt={`Image by ${image.author}`}
            width={300} // ✅ Set a fixed width
            height={200} // ✅ Set a fixed height
            className="rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
}
