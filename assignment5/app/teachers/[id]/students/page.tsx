"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Student {
  id: number;
  name: string;
  age: number;
  teacherId: number;
}

export default function TeacherStudentsPage() {
  const { id } = useParams();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`/api/teachers/${id}/students`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setStudents(data);
        } else {
          setError("Invalid data format received");
        }
      })
      .catch((err) => setError("Error fetching students"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Students Under Teacher {id}</h2>
      {students.length > 0 ? (
        <ul className="list-disc pl-5">
          {students.map((student) => (
            <li key={student.id} className="mb-2">
              <strong>{student.name}</strong> (Age: {student.age})
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found for this teacher.</p>
      )}
    </div>
  );
}
