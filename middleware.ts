import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") return NextResponse.next();

  // Respect explicit cookie set by the language switcher
  const localeCookie = request.cookies.get("locale")?.value;
  if (localeCookie === "en") {
    return NextResponse.redirect(new URL("/en", request.url));
  }
  if (localeCookie === "fr") {
    return NextResponse.next();
  }

  // Auto-detect from browser / device Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const primary = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

  if (primary === "en") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
