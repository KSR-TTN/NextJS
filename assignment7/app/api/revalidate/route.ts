import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  console.time("Fetching Data and cashing");
  const response = await fetch(url, {
    cache: "force-cache", // Cache the API response
    next: { tags: ["myData"] }, // Associate the cache with the tag "myData"
  });
  const data = await response.json();
  console.timeEnd("Fetching Data and cashing");

  return NextResponse.json(data);
}

export async function POST() {
  revalidateTag("myData"); // Clears the cached data for "myData"
  console.log("Cache cleared for tag: myData");

  return NextResponse.json({ message: "Cache purged successfully!" });
}
