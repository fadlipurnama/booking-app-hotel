import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";
import { Adapter } from "next-auth/adapters";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  // providers: [Google],
  session: {
    strategy: "jwt",
  },
  ...authConfig
  // pages: {
  //   signIn: "/sign-in",
  // },
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) token.role = user.role;
  //     return token;
  //   },
  //   session({ session, token }) {
  //     session.user.id = token.sub;
  //     session.user.role = token.role;
  //     return session
  //   },
  // },
});
