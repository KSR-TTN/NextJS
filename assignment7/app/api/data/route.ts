import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  console.time("Force Cache Fetch (API)");
  const responseForceCache = await fetch(url, { cache: "force-cache" });
  const dataForceCache = await responseForceCache.json();
  console.timeEnd("Force Cache Fetch (API)");

  console.time("No Store Fetch (API)");
  const responseNoStore = await fetch(url, { cache: "no-store" });
  const dataNoStore = await responseNoStore.json();
  console.timeEnd("No Store Fetch (API)");

  return NextResponse.json({
    forceCache: dataForceCache,
    noStore: dataNoStore,
  });
}
