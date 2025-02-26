import { ProductsProvider } from "@/app/useReducer/ProductsProvider";
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
