// slice
import { useState } from 'react';
import { type RequestPost } from '../types';
// layer
import { useFetch } from '@/src/6-shared/hooks/use-fetch';

// type
type UseCreateStoryReturn = {
  isLoading: boolean;
  status: number | null;
  startFetch: ( data: RequestPost ) => void;
};

/**
 * @Desc
 * 게시글 작성 API
 */
const useCreatePostApi = (): UseCreateStoryReturn => {
  const { status, isLoading, startFetch } = useFetch<null, RequestPost>({
      url: '/api/member/post',
      options: {method: "POST"},
      autoFetch: false
    });
    
  return { status, isLoading, startFetch };
};

export { useCreatePostApi };