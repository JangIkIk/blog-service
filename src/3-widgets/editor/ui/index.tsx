"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { type PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import { useEditorConfig } from '../hooks/useEditorConfig';
import { UploadButton } from "../lib/uploadthing";

import { cn } from "@shared/lib/cn";
import StoryCreateButton from '@features/story-create-button/ui';
import { StoryForm } from '@entities/types';


type EditorProps = {
  initContent?: PartialBlock[];
  editable?: boolean;
  url?: string;
  theme?: "light" | "dark";
  markdownData?: ( markdownData: string ) => void;
};

export default function Editor(props: EditorProps) {
  const { initContent, markdownData, editable, url = "https://picsum.photos/1200/800", theme = "light" } = props;
  const { editor, markdown, changeMarkdown } = useEditorConfig({initContent});
  const [cover, setCover] = useState<string>(url);
  const [storyData, setStoryData] = useState<StoryForm>({
      title: "initTitle",
      content: "initContent",
      aiContent: null,
      thumbnailImage: null,
      scope: "PUBLIC"
    })


  useEffect(()=>{
    // if(cover && coverRef) coverRef.current = cover; 
    if(markdownData) markdownData(markdown);
  },[markdown, cover])

  return (
    <div className="my-4">
      <div className="relative w-full h-[300px] theme-bg-2 rounded-lg group">
      {/* 커버이미지 */}
      <Image
            src={cover}
            alt="cover"
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
          />
        {/* 업로드 버튼 */}
        <div>
          <UploadButton
            endpoint="imageUploader"
            content={{ button: "커버변경" }}
            className={cn(
              "w-fit ut-allowed-content:hidden absolute right-2 bottom-2 opacity-0 transition-opacity ut-button:bg-brand-main ut-button:rounded-lg group-hover:opacity-100"
            )}
            onClientUploadComplete={(res)=>{
            setCover(res[0].ufsUrl);
            }}
          />
        </div>
      </div>

      {/* 제목 */}
      <TextareaAutosize
        placeholder="제목"
        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl font-bold outline-none py-5 theme-text-1"
      />

      {/* 본문 */}
      <div>
        <BlockNoteView
          editor={editor}
          editable={editable}
          onChange={changeMarkdown}
          theme={theme}
        />
      </div>
      

      <div className="flex flex-col gap-3 justify-end fixed right-0 bottom-0 p-4">
        <StoryCreateButton {...storyData}/>
        {["발행하기", "임시저장", "취소하기", "공개/비공개"].map((text) => (
            <button key={text} className="shrink-0 grow-1 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm bg-brand-soft text-white">
          {text}
        </button>    
        ))}
      </div>
    </div>
  );
}
