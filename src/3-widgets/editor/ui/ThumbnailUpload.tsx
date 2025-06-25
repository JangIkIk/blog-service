"use client";
// package
import { ReactElement, type ChangeEvent } from "react";
// layer
import Button from "@shared/ui/Button";

// type
type ThumbnailUploadProps = {
    submitThumbnailUpload: (event: ChangeEvent<HTMLInputElement>) => void;
};
type ThumbnailUploadReturn = ReactElement;

/**
 * @Desc
 * 이미지 파일 업로드 버튼
 */
function ThumbnailUpload( props: ThumbnailUploadProps ): ThumbnailUploadReturn {
    const { submitThumbnailUpload } = props;
  return (
    <>
      <Button intent={"soft"} className="" asChild>
        <label htmlFor="upload" className="grow-1 bg-blue-500">
          <input
            id="upload"
            type="file"
            className="hidden"
            onChange={submitThumbnailUpload}
            accept="image/png, image/jpeg, image/jpg"
          />
          커버변경
        </label>
      </Button>
    </>
  );
}

export default ThumbnailUpload;
