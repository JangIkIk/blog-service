'use client'
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { type PartialBlock } from "@blocknote/core";

function Story() {
  const Editor = useMemo(
    () => dynamic(() => import("@/src/3-widgets/editor/index"), { ssr: false }),
    []
  );

  return (
    <div className="px-10">
      <Editor/>
    </div>
  );
}

export default Story


// const initContent: PartialBlock[] = [
//     {
//       type: 'paragraph',
//       content: '이것은 상위 컴포넌트에서 전달된 초기 데이터입니다.',
//     },
//     {
//       type: 'heading',
//       props: {
//         level: 3,
//       },
//       content: '데이터 전달 성공!',
//     },
//     {
//         type: 'bulletListItem',
//         content: '블록노트 배우기',
//     },
//     {
//         type: 'bulletListItem',
//         content: '초기값 설정하기',
//     }
//   ];