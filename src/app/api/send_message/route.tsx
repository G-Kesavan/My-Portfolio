import { NextResponse } from "next/server";
import sendEmail from "@/lib/sendEmail";

export async function POST(req: Request) {
  const { email, name, message } = await req.json();

  const success = await sendEmail(email, name, message);

  return NextResponse.json({ success });
}