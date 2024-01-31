import { NextApiHandler } from "next";

export async function POST() {
  return Response.json({ hello: 2 });
}
