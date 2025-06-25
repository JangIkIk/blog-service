import { NextRequest, NextResponse } from "next/server";
import { auth } from "@app/auth";

export async function POST(req: NextRequest) {
  try {
    console.log("요청들어옴");
    const session = await auth();
    console.log("session:", session);
    return NextResponse.json({
      status: 200,
      data: { title: "testTitle", content: "testContent" },
    });
  } catch (error) {}
}
