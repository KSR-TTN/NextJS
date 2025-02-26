"use client";

import { useEffect, useState } from "react";

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    fetch("/api/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error("Error fetching teachers:", err));
  }, []);

  return (
    <div>
      <h2>All Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name} (Subject: {teacher.subject})
            <a href={`/teachers/${teacher.id}/students`}> View Students</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
