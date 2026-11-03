import { NextResponse } from "next/server";
import { loadRuns } from "@/lib/dashboard/loadRuns";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await loadRuns());
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to load data" },
      { status: 500 }
    );
  }
}