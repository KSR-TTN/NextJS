import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://picsum.photos/v2/list?page=1&limit=5"; // Fetch 5 images

  const response = await fetch(url, { cache: "force-cache" });
  const data = await response.json();

  return NextResponse.json(data);
}
