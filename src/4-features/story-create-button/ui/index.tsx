import { useCreateStoryApi } from '@entities/use-create-story-api';
import type { StoryForm } from '@entities/types';


export default function StoryCreateButton( props: StoryForm ){
    const { title, content, aiContent, thumbnailImage, scope = "PUBLIC"} = props;
    const { status, isLoading, startFetch } = useCreateStoryApi();

    const submitCreateStory = () => {

        // model 영역으로 분리 필요
        if(!title) alert("제목을 입력해주세요");
        if(!content) alert("내용을 입력해주세요");

        startFetch(props);
    }

    switch(status){
        case 200:
        break;
    }

    return(
        <button className="shrink-0 grow-1 cursor-pointer rounded-lg px-3 py-2 font-bold text-sm bg-brand-soft text-white" onClick={submitCreateStory}>
          {"발행하기"}
        </button>
    );
}