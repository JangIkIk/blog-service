"use client";
// layer
import { useCreateStoryApi, type RequestPost, z_InputPost } from "@/src/5-entities/story";

const useCreateStory = () => {
    const { status, isLoading, startFetch } = useCreateStoryApi();

  const submitStory = (data: unknown) => {
    const result = z_InputPost.safeParse(data);

    if(!result.success){
      const formatted = result.error.format();

      if(formatted.title){
        alert(formatted.title._errors)
        return;
      }

      if(formatted.content){
        alert(formatted.content._errors)
        return;
      }

      // need a refactor: 다른경우 확인 필요
      return;
    }


    const validData:RequestPost = {
      ...result.data,
      content: JSON.stringify(result.data.content),
    };
    startFetch(validData);
  };

  // 상태코드 임시
  if(status){
    switch (status) {
    case 200:
      alert("200")
      break;
    case 400:
      alert("400")
      break;
    case 403:
      alert("403")
      break;
    default:
      alert("default");
    }
  };

  return { isLoading, submitStory };
};

export { useCreateStory };
