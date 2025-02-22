import employees from "@/data/employees.json";

export default function About() {
  return (
    <main className="text-center p-8">
      <h1 className="text-3xl font-semibold text-blue-600">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        {employees.company} - We build amazing software solutions.
      </p>
    </main>
  );
}
