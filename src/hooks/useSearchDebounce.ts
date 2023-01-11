import { useEffect, useState } from "react";

export default function useDebounce(text: string) {
  const [debounceText, setDebounceText] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceText(text);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  return debounceText;
}
