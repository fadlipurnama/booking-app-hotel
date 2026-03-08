import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const ProtectedRoutes = ["/my-reservation", "/checkout", "/admin"];
const { auth } = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  const role = session?.user.role;
  const { pathname } = request.nextUrl;

  if (
    !isLoggedIn &&
    ProtectedRoutes.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  };

  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};


export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};