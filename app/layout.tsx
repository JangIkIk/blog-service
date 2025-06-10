import localFont from "next/font/local";

import Providers from "./(auth)/providers";
import { auth } from "./(auth)/auth";

import BaseLayout from "@/src/1-app/layout/baseLayout";
import "@app/global.css";

const pretendard = localFont({
  src: "../public/fonts/pretendard-medium.woff2",
});

export default async function RootLayout(props: Props) {
  const { children } = props;
  const session = await auth();

  return (
    <html lang="ko" className={`${pretendard.className}`}>
      <body>
        <Providers session={session}>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}

type Props = Readonly<{
  children: React.ReactNode;
}>;