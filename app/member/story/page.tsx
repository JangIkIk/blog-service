"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { type PartialBlock } from "@blocknote/core";

export default function Page() {
  const Editor = useMemo(
    () => dynamic(() => import("@/src/3-widgets/editor/index"), { ssr: false }),
    []
  );

   const myInitialContent: PartialBlock[] = [
    {
      type: 'paragraph',
      content: '이것은 상위 컴포넌트에서 전달된 초기 데이터입니다.',
    },
    {
      type: 'heading',
      props: {
        level: 3,
      },
      content: '데이터 전달 성공!',
    },
    {
        type: 'bulletListItem',
        content: '블록노트 배우기',
    },
    {
        type: 'bulletListItem',
        content: '초기값 설정하기',
    }
  ];

  return (
    <div className="px-10">
      <Editor initContent={myInitialContent} />
      <div className="flex flex-col gap-3 justify-end items-center fixed right-0 bottom-0 p-4">
        <button className="shrink-0 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm bg-brand-soft text-white">
          발행하기
        </button>
        <button className="shrink-0 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm theme-bg-4 text-white">
          임시저장
        </button>
        <button className="shrink-0 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm theme-bg-4 text-white">
          취소하기
        </button>
      </div>
    </div>
  );
}
