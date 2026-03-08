import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = {
  providers: [Google], // Provider ditaruh di sini agar Middleware tahu cara login
  pages: {
    signIn: "/sign-in", // Halaman login kustom kamu
  },
  callbacks: {
    // Kita pindahkan logika JWT ke sini agar Middleware bisa baca 'role'
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;