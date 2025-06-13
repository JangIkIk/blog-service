import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@shared/lib/prisma";


export async function GET(req: NextRequest) {
    console.log("체크")

    const test = await prisma.user.findUnique({
        where: {
            email: "test@gmail.com"
        }
    })
    console.log(test);

    return NextResponse.json("");
}