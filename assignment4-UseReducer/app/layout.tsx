import { ProductsProvider } from "@/app/contextApi/ProductsProvider";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProductsProvider>{children}</ProductsProvider>
      </body>
    </html>
  );
}
