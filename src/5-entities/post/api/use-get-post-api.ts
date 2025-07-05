import {} from '../types';
// layer
import { useFetch } from '@shared/hooks/use-fetch';

/**
 * @Desc
 * PUBLIC 게시글 리스트
 */
const useGetPostApi = () => {
    const { fetchData, status, isLoading, startFetch } = useFetch({
        url: '/api/post',
        options: { method: "GET" },
        autoFetch: true,
    })

    return { fetchData, status, isLoading, startFetch };
}

export { useGetPostApi }; 