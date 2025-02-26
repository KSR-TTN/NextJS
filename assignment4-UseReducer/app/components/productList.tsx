"use client";

import { useContext } from "react";
import { ProductsContext } from "../useReducer/ProductsProvider";

export default function ProductList() {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    throw new Error("ProductsContext must be used within a ProductsProvider");
  }

  const { products, deleteProduct } = productsContext;

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Product List
      </h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {product.title}
              </h3>
              <p className="text-gray-500 text-center">
                ${product.price.toFixed(2)}
              </p>
              <button
                className="mt-3 px-5 py-2 w-full bg-red-500 text-white font-medium rounded-lg transition duration-300 hover:bg-red-600"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No products available
        </p>
      )}
    </div>
  );
}
