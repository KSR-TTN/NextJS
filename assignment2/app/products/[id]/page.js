import products from "@/data/products.json";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <h1 className="text-center text-red-500">Product not found</h1>;
  }

  return (
    <main className="text-center p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">{product.price}</p>
    </main>
  );
}
