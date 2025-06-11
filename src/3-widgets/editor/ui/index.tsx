"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

import {
  BlockNoteEditor,
  type PartialBlock,
  type Block,
} from "@blocknote/core";
import { ko } from "@blocknote/core/locales";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import { uploadFiles } from "@shared/lib/uploadthing";
import { UploadButton } from "@shared/lib/uploadthing";
import { cn } from "@shared/lib/cn";

/*
  에디터 기본 조건
  - 테마변경이 가능해야한다.
  - 노션과 비슷한 기능을 가진다.
  - 이미지 업로드가 가능해야한다.
  - 커버를 변경했을때 업로드가 되어야 한다.
  - 마크다운으로 변환이 가능해야 한다.(서버 저장시 필요)
    - * 내용은 당연히 마크다운이지만 이 외로 커버이미지, 공개/비공개 등 서버의 테이블에 맞게 보낼수 있는지?
  - 마크다운을 다시 블록으로 변환이 가능해야 한다.(수정 or 임시저장글 불러올때)
  - 마크다운을 다시 HTML 블록으로 변환이 가능해야 한다.(SSR로 그릴때)

  * 최소한의 기능을 가지고 구현한다음 커스텀 하기로
*/

type EditorProps = {
  initContent?: PartialBlock[];
  editable?: boolean;
  url?: string;
};

export default function Editor(props: EditorProps) {
  // 상위에서 useState or useRef를 전달 받아 발행 버튼 클릭시에 유효성 검사 필요

  const {
    url,
    initContent,
    editable,
  } = props;
  const [cover, setCover] = useState(url || "https://picsum.photos/1200/800");
  const [markdown, setMarkdown] = useState<string>("");

  const editor: BlockNoteEditor = useCreateBlockNote({
    animations: true,
    defaultStyles: true,
    trailingBlock: false,
    dictionary: ko,
    initialContent: initContent || undefined,
    uploadFile: async (file: File) => {
      const [res] = await uploadFiles("imageUploader", { files: [file] });
      return res.ufsUrl;
    },
  });

  const onChange = async () => {
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
  };
  useEffect(() => {
    onChange();
  }, []);

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
            console.log(res[0].ufsUrl);
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
          onChange={onChange}
          theme={"light"}
        />
      </div>
    </div>
  );
}
