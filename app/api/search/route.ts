// app/api/search/route.ts

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json([]);
  }

  const { data, error } = await supabase
    .from("sites")
    .select("name, slug")
    .ilike("name", `%${query}%`)
    .limit(50);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}