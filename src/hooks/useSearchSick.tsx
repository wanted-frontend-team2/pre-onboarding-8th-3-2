import { useEffect, useState } from "react";

import { searchAPI } from "src/apis";
import type { OnChangeEvent } from "src/types/onEvent.type";

import { useBoolean } from "./useBoolean";
import { useCallApi } from "./useCallApi";
import { useDebounceInput } from "./useDebounce";

export const useSearchSick = () => {
  const [searchValue, setSearchValue] = useState("");
  const { isBoolean: isFocus, setTrue, setFalse } = useBoolean();
  const { inputValue } = useDebounceInput(searchValue);
  const { start, result, reset } = useCallApi(searchAPI.get, inputValue);

  useEffect(() => {
    if (!inputValue) {
      reset();
      return;
    }

    start();
  }, [inputValue]);

  const onChange = (e: OnChangeEvent) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return {
    searchValue,
    onChange,
    result,
    isFocus,
    setTrue,
    setFalse,
    // isLoading,
    // result,
    // cache,
    // getSicks,
  };
};
