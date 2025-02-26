import { NextResponse } from "next/server";
import { readData } from "@/lib/readData";

interface Student {
  id: number;
  name: string;
  age: number;
  teacherId: number;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log(params.id);

  const par = await params;
  const teacherId = Number(par.id);
  console.log(teacherId);

  if (!teacherId) {
    return NextResponse.json(
      { message: "Teacher ID is required" },
      { status: 400 }
    );
  }

  const data = await readData();

  const students = data.students.filter(
    (s: Student) => s.teacherId === teacherId
  );

  return NextResponse.json(students);
}
