"use client"
import { signIn } from "next-auth/react";
import {
  MagnifyingGlassIcon,
  TextAlignJustifyIcon,
  MoonIcon
} from "@radix-ui/react-icons";
import { cn } from "@shared/lib/cn";
import {useTheme} from '@shared/hooks/use-theme';

export default function Header() {

  const changeTheme = useTheme( state => state.actions.changeTheme );

  return (
    <div className="w-full flex justify-between items-center gap-8 px-4 py-2 border-b theme-border-2">
      {/* 왼쪽 영역 */}
      <div className="shrink-0 flex items-center gap-4">
        {/* 로고 */}
        <div className="flex items-center gap-4 font-bold text-xl text-brand-main">
          <span>Prolog</span>
        </div>
        {/* 네비게이션 */}
        <nav className={cn("hidden", "md:flex items-center gap-4 font-medium text-base theme-text-2")}>
          {["홈","기술블로그","템플릿","채용"].map((text) => (
          <span key={text} className="cursor-pointer hover:theme-text-1">
            {text}
          </span>
          ))}
        </nav>
      </div>

      {/* 오른쪽 영역 */}
      <div className="grow-1 flex items-center gap-4 justify-end theme-text-2">
        {/*검색창*/}
        <div
          className={cn(
            "max-w-sm grow-0 flex items-center gap-2 theme-bg-2 p-2 rounded-lg",
            "md:grow-1"
          )}
        >
          <div>
            <MagnifyingGlassIcon className="size-6 hover:text-brand-main cursor-pointer" />
          </div>

          <input
            type="text"
            placeholder="어떤글을 찾고있나요?"
            className={cn("w-full hidden outline-none theme-text-1","md:block")}
          />
        </div>
        {/* 로그인 버튼 */}
        <button  onClick={changeTheme}>
          <MoonIcon className={cn("cursor-pointer size-5 hover:text-brand-main")}/>
        </button>
        <TextAlignJustifyIcon className={cn("cursor-pointer size-7 hover:text-brand-main", "md:hidden")}/>
        <div className={cn("hidden", "md:block")}>
          <button className="shrink-0 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm bg-brand-soft text-white" onClick={() => signIn("google")}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
