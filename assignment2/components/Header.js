import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/contact" className="hover:underline">
        Contact
      </Link>
      <Link href="/products" className="hover:underline">
        Products
      </Link>
    </header>
  );
}
