export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api/data", {
    cache: "no-store",
  });
  const { forceCache, noStore } = await response.json();

  return (
    <div>
      <h1>Next.js Fetch Caching Demo (Using API Route)</h1>

      <h2>Force Cache:</h2>
      <pre>{JSON.stringify(forceCache, null, 2)}</pre>

      <h2>No Store:</h2>
      <pre>{JSON.stringify(noStore, null, 2)}</pre>
    </div>
  );
}

// Why is "force-cache" Slower?
// it is only slower in dev phase after building the build it become faster
