"use client";

// package
import Image from "next/image";
import { SymbolIcon } from "@radix-ui/react-icons";
import { useEffect, useState, type ReactElement } from "react";
import { type PartialBlock, type Block } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
// slice
import { useEditorConfig } from "../lib/use-editor-config";
import { useThumbnail } from "../api/use-thumbnail";
import ThumbnailUploadButton from "./ThumbnailUpload";
// layer
import TitleTextArea from "@shared/ui/TextArea";
import { type InputPost } from '@entities/story';
import Button from "@shared/ui/Button";
import { useTheme } from "@shared/hooks/use-theme";

// type
type EditorProps = {
  initContent?: PartialBlock[];
  editable?: boolean;
  markdownData?: (markdownData: string) => void;
  children?: (storyData: InputPost) => ReactElement;
};
type EditorReturn = ReactElement;

/**
 * @Desc
 * blocknote 에디터
 */
function Editor(props: EditorProps): EditorReturn {
  // 초기내용, 마크다운변환 데이터, 에디터 활성화 여부
  const { initContent, editable, children } = props;
  // blocknote 에디터설정
  const { editor } = useEditorConfig({ initContent });
  // 에디터 테마
  const theme = useTheme((state) => state.theme);
  // 썸네일
  const { submitImageUpload, uploadUrl, isLoading } = useThumbnail();
  // 게시글 데이터
  const [storyData, setStoryData] = useState<InputPost>({    
    title: "",
    content: [],
    aiContent: null,
    thumbnailImage: null,
    scope: "PUBLIC",
  });
  // 성공한 이미지 업로드 url 저장
  useEffect(() => {
    if (uploadUrl && !isLoading) {
      setStoryData((prev) => ({ ...prev, thumbnailImage: uploadUrl }));
    }
  }, [uploadUrl]);

  return (
    <div className="my-4">
      {/* 썸네일 */}
      <div className="relative w-full h-50 theme-bg-2 rounded-lg group">
        {uploadUrl && (
          <Image
            src={uploadUrl}
            alt="cover"
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
          />
        )}
        <div className="absolute right-3 bottom-3">
          {isLoading ? (
            <div>
              <SymbolIcon className="animate-spin size-7 text-brand-main" />
            </div>
          ) : (
            <ThumbnailUploadButton submitThumbnailUpload={submitImageUpload} />
          )}
        </div>
      </div>

      {/* 제목 */}
      <TitleTextArea
        onChange={({ target }) => {
          setStoryData((prev) => ({ ...prev, title: target.value }));
        }}
        className="text-4xl py-5 font-bold"
        placeholder="제목"
      />

      {/* 내용 */}
      <div>
        <BlockNoteView
          editor={editor}
          editable={editable}
          onChange={() => {
            setStoryData((prev) => ({ ...prev, content: editor.document }));
          }}
          theme={theme}
        />
      </div>

      {/* 버튼리스트 */}
      <div className="flex flex-col gap-3 justify-end fixed right-0 bottom-0 p-4">
        {/* Props 버튼*/}
        {children?.(storyData)}

        {/* 임시저장 */}
        <Button intent={"soft"}>임시저장</Button>

        {/* ai요약 */}
        <Button intent={"soft"}>ai요약</Button>

        {/* 공개 / 비공개 */}
        <Button
          intent={"soft"}
          onClick={() => {
            setStoryData((prev) => ({ ...prev, scope: "PUBLIC" }));
          }}
        >
          공개/비공개
        </Button>

        {/* 취소 */}
        <Button intent={"soft"}>취소하기</Button>
      </div>
    </div>
  );
}

export default Editor;
