import localFont from "next/font/local";

import "@app/global.css";
import Providers from "@app/providers";
import { auth } from "@app/auth";
import BaseLayout from "@app/layout/baseLayout";

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