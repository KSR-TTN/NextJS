"use client";

import ProductForm from "./components/productForm";
import ProductList from "./components/productList";
import { ProductsProvider } from "./contextApi/ProductsProvider";

export default function Home() {
  return (
    <ProductsProvider>
      <div className="min-h-screen flex flex-col items-center p-8">
        <h1 className="text-3xl font-bold mb-6">Product Management</h1>
        <ProductForm />
        <ProductList />
      </div>
    </ProductsProvider>
  );
}
