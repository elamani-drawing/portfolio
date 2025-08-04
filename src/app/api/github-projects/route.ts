import { NextRequest, NextResponse } from "next/server";
import { GetProjectsFromGitHub, RepoInfo } from "@/lib/services/github";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const repos: RepoInfo[] = body.repos;

    if (!Array.isArray(repos)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const projects = await GetProjectsFromGitHub(repos);
    return NextResponse.json({ projects });
  } catch (err) {
    console.error("Erreur API GitHub Projects:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
