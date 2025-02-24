// app/layout.tsx
import './globals.css';
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300 p-10 font-sans">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">🚀 Next.js App Router Demo</h1>

          <nav className="flex justify-center gap-6 mb-10">
            <Link href="/client-side" className="btn">🌐 Client-Side</Link>
            <Link href="/server-side" className="btn">⚙️ Server-Side</Link>
            <Link href="/posts/1" className="btn">🕰️ ISR Example</Link>
          </nav>

          <div className="bg-white p-8 rounded-2xl shadow-inner">{children}</div>
        </div>

        <footer className="text-center mt-12 text-gray-700">
          © {new Date().getFullYear()} Next.js Demo | Styled with Tailwind CSS
        </footer>
      </body>
    </html>
  );
}
