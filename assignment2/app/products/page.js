import products from "@/data/products.json";

export default function Products() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold text-blue-600 text-center">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {products.map((product) => (
          <a
            key={product.id}
            href={`/products/${product.id}`}
            className="border p-4 rounded-lg shadow-lg hover:bg-gray-200"
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="fo  nt-semibold">{product.price}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
