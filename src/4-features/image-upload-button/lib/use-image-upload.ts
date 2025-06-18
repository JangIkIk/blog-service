"use client";
// package
import { type ChangeEvent } from "react";
import { generateReactHelpers } from "@uploadthing/react";
// slice
import { useUploadedUrl } from "../hooks/use-uploaded-url";
// layer
import type { OurFileRouter } from "@/app/api/uploadthing/core";
// type
type UseImageUploadReturn = {
  submitImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
};
/**
 * @Desc
 * uploadthing 이미지 API
 */
const useImageUpload = (): UseImageUploadReturn => {
  const saveUrl = useUploadedUrl((state) => state.actions.saveUrl);
  const { useUploadThing } = generateReactHelpers<OurFileRouter>();

  const { startUpload, routeConfig } = useUploadThing("editorUploadr", {
    onClientUploadComplete: (res) => {
      const url = res[0].ufsUrl as string;
      saveUrl(url);
    },
    onUploadError: (error) => {
      // need a refactor:  모달 or 알림창으로 변경 (routeConfig 활용)
      if (error.message === "COUNT")
        alert("이미지는 하나만 등록할수 있습니다.");
      if (error.message === "TYPE") alert(".jpg, .jpeg, .png 만 가능합니다.");
      if (error.message === "SIZE") alert("이미지는 4MB를 초과할수 없습니다.");
    },
    onUploadBegin: async (fileName) => {
      // need a refactor: 업로드전 세션 확인 필요?
    },
  });

  const submitImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selectedFile = Array.from(event.target.files);
    startUpload(selectedFile);
  };

  return { submitImageUpload };
};

export { useImageUpload };
