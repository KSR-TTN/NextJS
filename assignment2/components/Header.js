export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-4">
      <a href="/" className="hover:underline">
        Home
      </a>
      <a href="/about" className="hover:underline">
        About
      </a>
      <a href="/contact" className="hover:underline">
        Contact
      </a>
      <a href="/products" className="hover:underline">
        Products
      </a>
    </header>
  );
}
