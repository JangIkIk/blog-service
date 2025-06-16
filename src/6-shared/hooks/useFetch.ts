import { useCallback, useEffect, useState } from "react";

export const useFetch = <TResponse = any, TRequest = any>(
  props: UseFetchProps
): UseFetchReturn<TResponse, TRequest> => {
  const { url, options, autoFetch = true } = props;
  const [fetchData, setFetchData] = useState<FetchData<TResponse>>(null);
  const [status, setStatus] = useState<FetchStatus>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startFetch: StartFetch<TRequest> = useCallback(
    async <T>(data?: T) => {
      // 초기에 로딩을 시작
      setIsLoading(true);

      // 기본 header
      const fetchBaseConfig = {
        method: "GET" as const,
        headers: {
          "Content-Type": "application/json",
        },
      };

      // 전달받은 header 옵션이 존재하는지
      const { method, headers } = options ?? fetchBaseConfig;

      // 전달받은 데이터가 FormData인지
      const isFormData = data instanceof FormData;

      // options에 따라 fetch 옵션 구성 및 body 설정
      const response = await fetch(`${url}`, {
        method,
        headers,
        ...(data && { body: isFormData ? data : JSON.stringify(data) }),
      });

      // fetch가 성공적이지 못하다면, 로딩을 취소, 상태값만 반환
      if (!response.ok) {
        setStatus(response.status);
        setIsLoading(false);
        return;
      }

      // fetch가 성공적이라면, json으로 변환후 각 state에 할당
      const jsonData = await response.json();
      setFetchData(jsonData.data);
      setStatus(jsonData.status);
      setIsLoading(false);
    },
    [url, options]
  );

  useEffect(() => {
    if (autoFetch) {
      startFetch();
    }
  }, [startFetch]);

  return { fetchData, status, isLoading, startFetch };
};


type OptionsMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
type OptionsHeader = { [key: string]: string };
type Options = {
  method?: OptionsMethod;
  headers?: OptionsHeader;
};

type UseFetchProps = {
  url: string;
  options?: Options;
  autoFetch?: boolean;
} & {};

type FetchData<T> = T | null;
type FetchStatus = number | null;
type StartFetch<TRequest = any> = <T = TRequest>(data?: T) => Promise<void>;

type UseFetchReturn<TResponse, TRequest = any> = {
  fetchData: FetchData<TResponse>,
  status: FetchStatus,
  isLoading: boolean,
  startFetch: StartFetch<TRequest>,
}