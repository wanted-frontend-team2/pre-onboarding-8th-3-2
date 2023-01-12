import {useEffect, useState} from "react";

interface IUseDebounce {
  <T>(value: T, delay?: number): T;
}
export const useDebounce: IUseDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
