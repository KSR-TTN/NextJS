"use client";

import { useContext, useState } from "react";
import { ProductsContext } from "../contextApi/ProductsProvider";

export default function ProductForm() {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    throw new Error("ProductsContext must be used within a ProductsProvider");
  }

  const { addProduct } = productsContext;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !image) return;

    addProduct({
      id: Math.floor(Math.random() * 1000), // Random ID for demo
      title,
      price: parseFloat(price),
      description: "New product",
      image,
    });

    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">Add Product</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
}
