import { NextRequest, NextResponse } from "next/server";

export const urlVersioning = (version: string) => (req: NextRequest) =>
  req.nextUrl.pathname.startsWith(`/api/${version}`)
    ? NextResponse.next()
    : NextResponse.json({ error: "API version not supported" }, { status: 404 });
