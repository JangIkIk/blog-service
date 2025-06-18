"use client";
// package
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { type PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
// slice
import { useEditorConfig } from "../lib/useEditorConfig";
// layer
import UploadButton, { useUploadedUrl } from "@features/image-upload-button";
import StoryCreateButton from "@features/story-create-button";
import { StoryForm } from "@entities/types";
import TitleTextArea from "@shared/ui/TextArea";

// type
type EditorProps = {
  initContent?: PartialBlock[];
  editable?: boolean;
  url?: string;
  theme?: "light" | "dark";
  markdownData?: (markdownData: string) => void;
};
/**
 * @Desc
 * blocknote 에디터
 */
function Editor(props: EditorProps) {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const { initContent, markdownData, editable, url, theme = "light" } = props;
  const { editor, markdown, changeMarkdown } = useEditorConfig({ initContent });
  const uploadedCover = useUploadedUrl((state) => state.imageUrl);

  const [storyData, setStoryData] = useState<StoryForm>({
    title: "initTitle",
    content: "initContent",
    aiContent: null,
    thumbnailImage: null,
    scope: "PUBLIC",
  });

  useEffect(() => {
    if (markdownData) markdownData(markdown);
  }, [markdown]);

  return (
    <div className="my-4">
      {/* 썸네일 */}
      <div className="relative w-full h-50 theme-bg-2 rounded-lg group">
        {uploadedCover && (
          <Image
            src={uploadedCover}
            alt="cover"
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
          />
        )}
        <div className="absolute right-3 bottom-3">
          <UploadButton />
        </div>
      </div>

      {/* 제목 */}
      <TitleTextArea
        ref={titleRef}
        className="text-4xl py-5 font-bold"
        placeholder="제목"
      />

      {/* 내용 */}
      <div>
        <BlockNoteView
          editor={editor}
          editable={editable}
          onChange={changeMarkdown}
          theme={theme}
        />
      </div>

        {/* 버튼리스트 */}
      <div className="flex flex-col gap-3 justify-end fixed right-0 bottom-0 p-4">
        <StoryCreateButton {...storyData} />
        {/* 임시저장, 취소하기, 공개/비공개 */}
      </div>
    </div>
  );
}

export default Editor;
