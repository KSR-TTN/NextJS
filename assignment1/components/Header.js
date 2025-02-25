import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl">My App</h1>
      <nav>
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/recipes">Recipes</Link>
      </nav>
    </header>
  );
}
