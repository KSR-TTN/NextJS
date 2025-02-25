"use client";

import { useContext } from "react";
import { ProductsContext } from "../contextApi/ProductsProvider";

export default function ProductList() {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    throw new Error("ProductsContext must be used within a ProductsProvider");
  }

  const { products, deleteProduct } = productsContext;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🛍️ Product List
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No products available.
        </p>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between w-full max-w-2xl bg-white p-4 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-contain rounded bg-gray-100 p-1"
              />

              {/* Product Info */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h2>
                <p className="text-gray-600 mt-1 text-sm">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Delete Button */}
              <button
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition duration-300"
                onClick={() => deleteProduct(product.id)}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
