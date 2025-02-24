import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const message = id ? `Hello from API for ID ${id}` : "Hello from API!";

  res.status(200).json({ id: id || "N/A", message });
}
