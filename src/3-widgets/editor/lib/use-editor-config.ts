"use client";
// package
import { useEffect, useState } from "react";
import { generateReactHelpers } from "@uploadthing/react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteEditor, type PartialBlock } from "@blocknote/core";
import { ko } from "@blocknote/core/locales";
// layer
import type { OurFileRouter } from "@/app/api/uploadthing/core";
// type
type EditorConfigProps = {
  initContent?: PartialBlock[];
};
/**
 * @Desc
 * blocknote 설정
*/
const useEditorConfig = (props?: EditorConfigProps) => {
  const { initContent } = props || {};
  const [markdown, setMarkdown] = useState<string>("");
  const { uploadFiles } = generateReactHelpers<OurFileRouter>();

  const editor: BlockNoteEditor = useCreateBlockNote({
    animations: true,
    defaultStyles: true,
    trailingBlock: false,
    dictionary: ko,
    initialContent: initContent || undefined,
    uploadFile: async (file: File) => {
      const [res] = await uploadFiles("editorUploadr", { files: [file] });
      return res.ufsUrl;
    },
  });

  // const changeMarkdown = async () => {
  //   const markdown = await editor.blocksToMarkdownLossy(editor.document);
  //   setMarkdown(markdown);
  // };

  // useEffect(() => {
  //   if (initContent) changeMarkdown();
  // }, []);

  return { editor };
};

export { useEditorConfig };
