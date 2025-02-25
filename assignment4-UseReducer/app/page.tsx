"use client";

import ProductList from "./components/productList";
import ProductForm from "./components/productForm";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product Management
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ProductForm />
        <ProductList />
      </div>
    </div>
  );
}
