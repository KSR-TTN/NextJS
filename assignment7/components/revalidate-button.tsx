"use client";

import { useState } from "react";

export default function RevalidateButton() {
  const [message, setMessage] = useState("");

  async function handleRevalidate() {
    const res = await fetch("/api/revalidate", { method: "POST" });
    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <div>
      <button
        onClick={handleRevalidate}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Revalidate Data
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
