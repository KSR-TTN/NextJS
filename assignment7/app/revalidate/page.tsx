"use client";

import { useState, useEffect } from "react";
import { Roboto } from "next/font/google";

// Load Roboto font with specific weight
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  const [data, setData] = useState(null);

  // Fetch data from API route
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/revalidate"); // Cached fetch
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  // Function to revalidate cache
  async function handleRevalidate() {
    await fetch("/api/revalidate", { method: "POST" }); // Trigger cache purge
    const response = await fetch("/api/revalidate"); // Fetch fresh data
    const result = await response.json();
    setData(result);
  }

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 ${roboto.className}`}
    >
      <h1 className="text-2xl font-bold">Next.js Cache Revalidation Demo</h1>

      <h2 className="mt-4 text-lg font-semibold">Fetched Data:</h2>
      <pre className="p-2 bg-gray-800 text-white rounded-md">
        {JSON.stringify(data, null, 2)}
      </pre>

      <button
        className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleRevalidate}
      >
        Revalidate Cache
      </button>
    </div>
  );
}
