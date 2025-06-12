import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { prisma } from '@shared/lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  // trustHost: true,

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },

    async jwt({ token, account, user, trigger, session }) {
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
});
