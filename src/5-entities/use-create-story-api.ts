import type { StoryForm } from './types';
import { useFetch } from '@shared/hooks/useFetch';

export const useCreateStoryApi = (): UseCreateStoryReturn => {
  const { status, isLoading, startFetch } = useFetch<null, StoryForm>({
      url: '/api/member/story',
      options: {method: "POST"},
      autoFetch: false
    });
    
  return { status, isLoading, startFetch };
};

type UseCreateStoryReturn = {
  isLoading: boolean;
  status: number | null;
  startFetch: ( data: StoryForm ) => void;
}


