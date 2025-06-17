import { useCreateStoryApi } from "@entities/use-create-story-api";
import type { StoryForm } from "@entities/types";
import { Button } from "@shared/ui/Button";
import { SymbolIcon } from "@radix-ui/react-icons";

function StoryCreateButton(props: StoryForm) {
  const { title, content, aiContent, thumbnailImage, scope = "PUBLIC" } = props;
  const { status, isLoading, startFetch } = useCreateStoryApi();

  const submitCreateStory = () => {
    // model 영역으로 분리 필요
    if (!title) alert("제목을 입력해주세요");
    if (!content) alert("내용을 입력해주세요");

    startFetch(props);
  };

  switch (status) {
    case 200:
      break;
  }

  return (
    <>
      <Button intent={"soft"} onClick={submitCreateStory} asChild>
        <div className="flex justify-center">
          {isLoading ? (
            <SymbolIcon className="animate-spin" />
          ) : (
            <span>발행하기</span>
          )}
        </div>
      </Button>
    </>
  );
}

export default StoryCreateButton;
