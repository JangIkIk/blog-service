"use client";
import { useState } from "react";
import { cn } from "@shared/lib/cn";

export default function Page() {
  // 임시
  const [selectSort, setSelectSort] = useState<string>("전체보기");
  const onClickSort = (text: string) => setSelectSort(text);

  // 임시
  const [selectPostsView, setSelectPostsView] = useState("카드");
  const onClickView = (text: string) => setSelectPostsView(text);

  return (
    <div className="theme-text-1">
      <h1 className="font-bold text-xl">게시글 목록</h1>

      {/* 탭 */}
      <section className="w-full flex gap-3 pt-5 border-b theme-border-2 text-sm theme-text-2">
        {["전체보기", "최신순", "인기순"].map((text) => (
          <button
            key={text}
            onClick={() => onClickSort(text)}
            className={cn("px-3 py-2 hover:text-brand-main", {
              "text-brand-main": selectSort === text,
            })}
          >
            {text}
          </button>
        ))}
      </section>

      {/* 보기옵션 */}
      <section className="my-5 theme-bg-2 rounded-lg p-1 flex text-sm gap-1">
        {["카드", "리스트", "태그"].map((text) => (
          <button
            key={text}
            onClick={() => onClickView(text)}
            className={cn(
              "grow-1 theme-text-2 py-1 rounded-lg hover:theme-bg-1 hover:theme-text-1",
              {
                "theme-bg-1 theme-text-1": selectPostsView === text,
              }
            )}
          >
            {text}
          </button>
        ))}
      </section>

      {/* 카드 리스트 */}
      <section className="w-full grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 theme-text-1 text-base">
        {[1,2,3,4,5,6,7,8,9,10].map((_, i) => (
          <div
            key={i}
            className="cursor-pointer rounded-lg flex flex-col gap-3 p-2 hover:theme-bg-2"
          >
            {/* 썸네일 (임시) */}
            <div className="w-full h-[125px] theme-bg-3 rounded-lg" />

            {/* 제목 */}
            <h3>The Rise of Sustainable Technology</h3>

            {/* 설명 */}
            <p className="text-xs theme-text-3">
              Discover the latest innovations in sustainable technology and
              their impact on the environment.
            </p>

            {/* 프로필 */}
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-full theme-bg-3" />
              <div className="flex flex-col">
                <span className="font-bold text-xs">
                  Mark Johnson
                </span>
                <span className="text-xs theme-text-3">2025-01-01</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
