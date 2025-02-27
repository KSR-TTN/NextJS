import fs from "fs/promises";
import path from "path";

export async function readData() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}


export async function writeData(payload:any){
  const filePath = path.join(process.cwd(), "data", "data.json");
  const data = await fs.writeFile(filePath, payload);
}