import type { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";

type Cache = {
  [key in string]: any;
};

interface UseCallApi {
  <T>(api: (params?: any) => Promise<AxiosResponse<T>>, params?: any): State<T>;
}
interface State<T> {
  cache: Cache;
  result: T | undefined;
  start: () => void;
  reset: () => void;
  isLoading: boolean;
  isError: boolean;
}

export const useCallApi: UseCallApi = (api, params) => {
  const cache: Cache = useRef({});

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(undefined);
  const [isError, setIsError] = useState(true);

  const start = () => setIsLoading(true);
  const end = () => setIsLoading(false);
  const reset = () => setResult(undefined);

  useEffect(() => {
    if (!isLoading) return;

    const cacheValue = cache.current[params];
    if (cacheValue) {
      setResult(cacheValue);
      end();
      return;
    }

    const callApi = async () => {
      try {
        const { data } = await api(params);
        cache.current[params] = data;
        setResult(cache.current[params]);

        end();
      } catch (err) {
        setIsError(true);
        end();

        throw new Error(err as any);
      }
    };

    callApi();
  }, [isLoading]);

  return { cache, start, result, reset, isLoading, isError };
};
