import {
  MagnifyingGlassIcon,
  TextAlignJustifyIcon,
} from "@radix-ui/react-icons";
import { cn } from "@shared/lib/cn";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center gap-8 px-4 py-2 border-b border-light-bg-2">
      {/* 왼쪽 영역 */}
      <div className="shrink-0 flex items-center gap-4">
        {/* 로고 */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-xl text-brand-main">Prolog</span>
        </div>
        {/* 네비게이션 */}
        <nav className={cn("hidden", "md:flex items-center gap-4")}>
          <span className="cursor-pointer font-medium text-base text-light-text-2 hover:text-light-text-1">
            홈
          </span>
          <span className="cursor-pointer font-medium text-base text-light-text-2 hover:text-light-text-1">
            기술블로그
          </span>
          <span className="cursor-pointer font-medium text-base text-light-text-2 hover:text-light-text-1">
            템플릿
          </span>
          <span className="cursor-pointer font-medium text-base text-light-text-2 hover:text-light-text-1">
            채용
          </span>
        </nav>
      </div>

      {/* 오른쪽 영역 */}
      <div className="grow-1 flex items-center gap-4 justify-end">
        {/*검색창*/}
        <div
          className={cn(
            "max-w-sm grow-0 flex items-center gap-2 bg-light-bg-2 p-2 rounded-lg",
            "md:grow-1"
          )}
        >
          <div>
            <MagnifyingGlassIcon className="size-6 text-light-text-2 hover:text-brand-main cursor-pointer" />
          </div>

          <input
            type="text"
            placeholder="검색"
            className={cn("w-full hidden outline-none","md:block")}
          />
        </div>
        {/* 로그인 버튼 */}
        <div className={cn("hidden", "md:block")}>
          <button className="shrink-0 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm bg-brand-soft text-white">
            로그인
          </button>
        </div>
        <TextAlignJustifyIcon className={cn("cursor-pointer size-7 text-light-text-2 hover:text-brand-main", "md:hidden")}/>
      </div>
    </header>
  );
}
