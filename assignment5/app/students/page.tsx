"use client";

import { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  age: number;
  teacherId: number;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} (Age: {student.age})
          </li>
        ))}
      </ul>
    </div>
  );
}
