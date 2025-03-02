import { NextResponse, NextRequest } from "next/server";
import { urlVersioning } from "@/app/middlewares/apiversion";

export async function GET(req: NextRequest) {
  const versionCheck = urlVersioning("v1")(req);
  if (versionCheck.status === 404) return versionCheck;

  const endpoint = req.nextUrl.searchParams.get("endpoint");
  if (!endpoint) return NextResponse.json({ error: "Endpoint required" }, { status: 400 });

  try {
    const res = await fetch(`https://example.com/api/v1${endpoint}`);
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
