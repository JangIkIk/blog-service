// package
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
// layer
import "@app/global.css";
import { auth } from "@app/auth";
import BaseLayout from "@app/layout/baseLayout";
import ThemeProvider from '@app/provider/ThemeProvider';

// type
type Props = Readonly<{
  children: React.ReactNode;
}>;

const pretendard = localFont({
  src: "../public/fonts/pretendard-medium.woff2",
});

async function RootLayout(props: Props) {
  const { children } = props;
  const session = await auth();

  return (
    <html lang="ko" className={`${pretendard.className}`}>
      <body>
        <SessionProvider session={session}>
          <ThemeProvider>
            <BaseLayout>{children}</BaseLayout>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
