import Quotes from "@/components/quotes";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">Quotes App</span>
      </h1>
      <Quotes />
    </div>
  );
}
