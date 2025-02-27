import { NextResponse } from "next/server";
import { readData } from "@/lib/readData";
import { writeData } from "@/lib/writeData";

export async function POST(req: Request) {
  const newTeacher = await req.json();

  if (!newTeacher.name || !newTeacher.subject) {
    return NextResponse.json(
      { message: "Name and subject are required" },
      { status: 400 }
    );
  }

  const data = await readData();
  newTeacher.id = data.teachers.length + 1;
  data.teachers.push(newTeacher);
  await writeData(data);

  return NextResponse.json({
    message: "Teacher added successfully",
    teacher: newTeacher,
  });
}
