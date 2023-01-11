import { useState, useEffect } from "react";

export const useDebounceInput = (value: string, delay = 400) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const onChange = setTimeout(() => setInputValue(value), delay);

    return () => clearTimeout(onChange);
  }, [value, delay]);

  return {
    inputValue,
  };
};
