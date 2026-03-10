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
});
