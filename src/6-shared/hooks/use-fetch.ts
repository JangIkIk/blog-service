"use client"
// package
import { useCallback, useEffect, useState } from "react";

// type
// fetch method
type OptionsMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
// fethc header
type OptionsHeader = { [key: string]: string };
type Options = {
  method?: OptionsMethod;
  headers?: OptionsHeader;
};
// fetch data
type FetchData<T> = T | null;
// fetch
type FetchStatus = number | null;
// fetch 수동
type StartFetch<TRequest = any> = <T = TRequest>(data?: T) => Promise<void>;
// fetch return
type UseFetchReturn<TResponse, TRequest = any> = {
  fetchData: FetchData<TResponse>,
  status: FetchStatus,
  isLoading: boolean,
  startFetch: StartFetch<TRequest>,
} & {}
// fetcg props
type UseFetchProps = {
  url: string;
  options?: Options;
  autoFetch?: boolean;
} & {};

/**
 * @Desc
 * 커스텀 fetch
*/
const useFetch = <TResponse = any, TRequest = any>(
  props: UseFetchProps
): UseFetchReturn<TResponse, TRequest> => {
  const { url, options, autoFetch = true } = props;
  const [fetchData, setFetchData] = useState<FetchData<TResponse>>(null);
  const [status, setStatus] = useState<FetchStatus>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startFetch: StartFetch<TRequest> = async <T>(data?: T) => {
      setIsLoading(true);

      const fetchBaseConfig = {
        method: "GET" as const,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { method, headers } = options ?? fetchBaseConfig;

      const isFormData = data instanceof FormData;

      const response = await fetch(`${url}`, {
        method,
        headers,
        ...(data && { body: isFormData ? data : JSON.stringify(data) }),
      });

      if (!response.ok) {
        setStatus(response.status);
        setIsLoading(false);
        return;
      }

      const jsonData = await response.json();
      setFetchData(jsonData.data);
      setStatus(jsonData.status);
      setIsLoading(false);
    };

  useEffect(() => {
    if (autoFetch && !isLoading) {
      startFetch();
    }
  }, []);

  return { fetchData, status, isLoading, startFetch };
};

export { useFetch }