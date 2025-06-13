import NextAuth from 'next-auth';
import { prisma } from '@shared/lib/prisma';
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  providers: [Google],
  callbacks: {
    // 로그인 성공 여부를 결정
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn________________________________________________")
      // 로그인 시도중인 사용자 정보
      console.log("user:",user);
      // 로그인에 사용된 계정 정보
      console.log("account:",account);
      // Oauth 프로바이더로부터 받은 원시 프로필 데이터
      console.log("profile:",profile);
      // 이메일 기반 로그인(매징 링크)시 제공되는 이메일 객체
      console.log("email:",email);
      // 자체회원 가입 관련
      console.log("credentials:",credentials);
      // 실패시 리다이렉트
      return "/";
      // 성공시 redirect로 진행
      return true;
    },
    // 로그인이 성공적으로 완료된 후 사용자를 어디로 리다이렉트할지 결절할때 사용됨
    async redirect({url, baseUrl}) {

      return baseUrl
    },
    // JWT가 생성되거나, 업데이트될때 호출, Session의 기반이됨
    async jwt({ token, user, account, profile, trigger, session }) {
      console.log("jwt________________________________________________")
      // JWT 토큰 객체 초기에는 기본 클레임만 포함, signIn 콜백이 반환한 user정보가 포함되어있을수 있음
      console.log("token:",token);
      // signIn 콜백에서 반환된 user객체(최초 로그인시에만 존재)
      console.log("user:",user);
      // signIn 콜백에서 반환된 account객체(최초 로그인시에만 존재)
      console.log("account:",account);
      // signIn 콜백에서 반환된 profile객체(최초 로그인시에만 존재)
      console.log("profile:",profile);
      // JWT가 호출된 원인
      console.log("trigger:",trigger);
      // trigger가 "update" 일때 클라이언트에서 전달된 세션 데이터
      console.log("session:",session);
      return token;
    },
    // 클라이언트에게 노출된 세션 객체
    async session({ session, user, token, newSession, trigger }) {
      console.log("session________________________________________________")
      // 현재 세션 객체
      console.log("session:",session);
      // 어댑터를 사용하는경우, 데이터베이스에서 가져온 AdapterUser타입의 사용자 객체
      console.log("user:",user);
      // jwt콜백에서 반환된 최종 JWT토큰
      console.log("token:",token);
      // trigger가 "update" 일때, 클라이언트에서 전달된 세션 데이터
      console.log("newSession:",newSession);
      // 세션 업데이트로 인해 호출되었음을 알림
      console.log("trigger:",trigger);
      return session;
    },
  },
});
