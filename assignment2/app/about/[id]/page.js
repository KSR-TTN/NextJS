import employees from "@/data/employees.json";

export default function EmployeePage({ params }) {
  const employee = employees.employees.find((e) => e.id === params.id);

  if (!employee) {
    return <h1 className="text-center text-red-500">Employee not found</h1>;
  }

  return (
    <main className="text-center p-8">
      <h1 className="text-3xl font-semibold">{employee.name}</h1>
      <p className="mt-2 text-lg">{employee.position}</p>
    </main>
  );
}
