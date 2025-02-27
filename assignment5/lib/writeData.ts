import fs from "fs/promises";
import path from "path";

export async function writeData(payload: any) {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = JSON.stringify(payload, null, 2);
  await fs.writeFile(filePath, jsonData, "utf-8");
}
