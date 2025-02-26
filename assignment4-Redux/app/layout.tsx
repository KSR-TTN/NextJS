import ReduxProvider from "@/redux/provider";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <ReduxProvider>
          <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="max-w-4xl mx-auto px-6">
              <h1 className="text-2xl font-bold">My App</h1>
            </div>
          </header>

          <main className="min-h-screen flex flex-col items-center justify-center p-6">
            {children}
          </main>

          <footer className="bg-gray-800 text-white py-4 text-center mt-6">
            <p>
              &copy; {new Date().getFullYear()} My App. All rights reserved.
            </p>
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
