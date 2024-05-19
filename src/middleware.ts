import { NextRequest, NextResponse } from "next/server";
const rateLimitMap = new Map();

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for");
  const limit = 2; // Limiting requests to 2 per minute per IP
  const windowMs = 60 * 60 * 1000; // 1 hr

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    });
  }

  const ipData = rateLimitMap.get(ip);

  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  if (ipData.count >= limit) {
    return NextResponse.json(
      { success: false, message: "Too Many Requests" },
      { status: 429 }
    );
  }

  ipData.count += 1;

  return NextResponse.next();
}

export const config = {
  matcher: "/api/send-email",
};
