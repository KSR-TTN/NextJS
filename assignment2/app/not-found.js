"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main className="text-center p-8">
      <h1 className="text-3xl font-semibold text-red-600">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Redirecting to homepage in {countdown} seconds...
      </p>
    </main>
  );
}
