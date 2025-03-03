"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";

// Load Roboto font with specific weight
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

// Dynamically import Popup component (disable SSR)
const Popup = dynamic(() => import("@/components/popup"), { ssr: false });

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${roboto.className}`}
    >
      <h1 className="text-2xl font-bold">Next.js Dynamic Pop-up</h1>

      <button
        className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setShowPopup(true)}
      >
        Open Pop-up
      </button>

      {/* Show Popup only when state is true */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
