// app/api/nasa/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NASA_API_KEY;
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return NextResponse.json(data);
}
