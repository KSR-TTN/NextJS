export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl">My App</h1>
      <nav>
        <a href="/" className="mr-4">
          Home
        </a>
        <a href="/products" className="mr-4">
          Products
        </a>
      </nav>
    </header>
  );
}
