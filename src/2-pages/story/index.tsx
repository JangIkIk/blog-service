'use client'
import dynamic from "next/dynamic";
import { useMemo, useState, useRef, useCallback } from "react";
import { type PartialBlock } from "@blocknote/core";

export default function Story() {
  const Editor = useMemo(
    () => dynamic(() => import("@/src/3-widgets/editor/index"), { ssr: false }),
    []
  );

  const [submit, setSubmit] = useState(false);
  const coverRef = useRef<string>("");
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const markdownRef = useRef<string>("");

  const submitTest = () => {
    setSubmit(!submit);
    console.log(titleRef?.current?.value);
    console.log(coverRef.current);
    console.log(markdownRef.current);
  }

  const initContent: PartialBlock[] = [
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

  const markdownData = useCallback((markdownContent: string) => {
    markdownRef.current = markdownContent;
  }, []);

  return (
    <div className="px-10">
      <Editor initContent={initContent} markdownData={markdownData} coverRef={coverRef} titleRef={titleRef}/>
      <div className="flex flex-col gap-3 justify-end fixed right-0 bottom-0 p-4">
        {["발행하기", "임시저장", "취소하기", "공개/비공개"].map((text) => (
            <button key={text} className="shrink-0 grow-1 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm bg-brand-soft text-white" onClick={submitTest}>
          {text}
        </button>    
        ))}
      </div>
    </div>
  );
}
