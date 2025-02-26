"use client";

import { useState } from "react";

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

export default function AddTeacher() {
  const [teacher, setTeacher] = useState<Teacher>({
    id: 0,
    name: "",
    subject: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/teachers/add-teacher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teacher),
    });

    if (response.ok) {
      alert("Teacher added successfully!");
      setTeacher({ id: 0, name: "", subject: "" });
    } else {
      alert("Error adding teacher");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Add New Teacher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={teacher.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Subject:</label>
          <input
            type="text"
            name="subject"
            value={teacher.subject}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
}
