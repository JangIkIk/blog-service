"use client";
// package
import { type ReactNode, useEffect } from "react";
// layer
import { useTheme } from "@shared/hooks/use-theme";
// type
type ThemeProviderProps = {
  children: ReactNode;
};
/**
 * @Desc
 * 테마를 다루는 컴포넌트
 * need a refactor: 화면 초기 테마에 따른 깜빡임 현상
 */
function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, actions } = useTheme();

  useEffect(() => {
    actions.getTheme();
  }, [theme]);

  return <>{children}</>;
}

export default ThemeProvider;
