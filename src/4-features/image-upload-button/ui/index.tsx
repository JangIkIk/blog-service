"use client";
// slice
import { useImageUpload } from "../lib/use-image-upload";
// layer
import { Button } from "@shared/ui/Button";
/**
 * @Desc
 * 이미지 파일 업로드 버튼
 */
function UploadButton() {
  const { submitImageUpload } = useImageUpload();

  return (
    <>
      <Button intent={"soft"} asChild>
        <label htmlFor="upload">
          <input
            id="upload"
            type="file"
            className="hidden"
            onChange={submitImageUpload}
            accept="image/png, image/jpeg, image/jpg"
          />
          커버변경
        </label>
      </Button>
    </>
  );
}

export default UploadButton;
