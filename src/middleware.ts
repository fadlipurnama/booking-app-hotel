// import { NextRequest, NextResponse } from "next/server";
// import { authConfig } from "./auth.config";
// import NextAuth from "next-auth";

// const ProtectedRoutes = ["/my-reservation", "/checkout", "/admin"];
// const { auth } = NextAuth(authConfig);


// export async function middleware(request: NextRequest) {
//   const session = await auth();
//   const isLoggedIn = !!session?.user;

//   const role = session?.user.role;
//   const { pathname } = request.nextUrl;

//   if (
//     !isLoggedIn &&
//     ProtectedRoutes.some((route) => pathname.startsWith(route))
//   ) {
//     return NextResponse.redirect(new URL("/sign-in", request.url));
//   };

//   if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   if (isLoggedIn && pathname.startsWith("/sign-in")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// };


// export const config = {
//    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };



import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

const ProtectedRoutes = ["/my-reservation", "/checkout", "/admin"];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth; // Cek login dari req.auth bawaan NextAuth
  const role = req.auth?.user?.role;
  const pathname = nextUrl.pathname;

  // 1. Redirect jika belum login ke rute terproteksi
  if (!isLoggedIn && ProtectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // 2. Proteksi Admin
  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 3. Redirect jika sudah login tapi mau ke page Sign-in
  if (isLoggedIn && pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};