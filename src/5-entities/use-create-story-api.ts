import type { StoryForm } from './types';
import { useFetch } from '@/src/6-shared/hooks/use-fetch';

type UseCreateStoryReturn = {
  isLoading: boolean;
  status: number | null;
  startFetch: ( data: StoryForm ) => void;
}

const useCreateStoryApi = (): UseCreateStoryReturn => {
  const { status, isLoading, startFetch } = useFetch<null, StoryForm>({
      url: '/api/member/story',
      options: {method: "POST"},
      autoFetch: false
    });
    
  return { status, isLoading, startFetch };
};

export { useCreateStoryApi };