import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") return NextResponse.next();

  // Only redirect if the user explicitly chose English via the language switcher
  const localeCookie = request.cookies.get("locale")?.value;
  if (localeCookie === "en") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
