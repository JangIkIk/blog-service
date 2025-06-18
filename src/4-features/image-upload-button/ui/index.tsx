"use client";
// slice
import { useImageUpload } from "../lib/use-image-upload";
import { SymbolIcon } from "@radix-ui/react-icons";
// layer
import { Button } from "@shared/ui/Button";
/**
 * @Desc
 * 이미지 파일 업로드 버튼
 */
function UploadButton() {
  const { submitImageUpload, isLoading } = useImageUpload();

  return (
    <>
      {isLoading ? (
        <div>
          <SymbolIcon className="animate-spin size-7 text-brand-main"/>
        </div>
      ) : (
        <Button intent={"soft"} className="" asChild>
          <label htmlFor="upload" className="grow-1 bg-blue-500">
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
      )}
    </>
  );
}

export default UploadButton;
