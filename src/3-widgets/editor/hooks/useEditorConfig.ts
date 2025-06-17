"use client";
import { useEffect, useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteEditor, type PartialBlock } from "@blocknote/core";
import { ko } from "@blocknote/core/locales";
import { uploadFiles } from "@/src/3-widgets/editor/lib/uploadthing";

type EditorConfigProps = {
  initContent?: PartialBlock[];
};

const useEditorConfig = (props?: EditorConfigProps) => {
  const { initContent } = props || {};
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

  const changeMarkdown = async () => {
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
  };

  useEffect(() => {
    if (initContent) changeMarkdown();
  }, []);

  return { editor, markdown, changeMarkdown };
};

export { useEditorConfig };
