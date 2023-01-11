import type { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";

type ApiMethod = (params?: any) => Promise<AxiosResponse<any>>;
type Cache = {
  [key in string]: any;
};

export const useCallApi = (api: ApiMethod, params?: any) => {
  const cache: Cache = useRef({});

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState(true);

  const start = () => setIsLoading(true);
  const end = () => setIsLoading(false);
  const reset = () => setResult([]);

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
