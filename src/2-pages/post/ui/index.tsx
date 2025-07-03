"use client";
// package
import { useMemo } from "react";
import dynamic from "next/dynamic";
// slice
import { useCreatePost } from '../api/use-create-post';
// layer
import Button from "@shared/ui/Button";


function Story() {
  const Editor = useMemo(
    () => dynamic(() => import("@/src/3-widgets/editor/index"), { ssr: false }),
    []
  );
  const { isLoading, submitStory } = useCreatePost();

  return (
    <div className="px-10">
      <Editor
        children={(storyData) => (
          <Button intent={"soft"} onClick={() => submitStory(storyData)}>
            발행하기
          </Button>
        )}
      ></Editor>
    </div>
  );
}

export default Story;

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
