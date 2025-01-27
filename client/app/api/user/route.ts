import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const {user} = await getServerSession(NEXT_AUTH);
    return NextResponse.json({user})
}