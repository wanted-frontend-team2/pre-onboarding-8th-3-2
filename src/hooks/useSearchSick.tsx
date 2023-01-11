import { useEffect, useState } from "react";

import { searchAPI } from "src/apis";
import type { OnChangeEvent } from "src/types/onEvent.type";
import type { SickListType } from "src/types/sick.type";

import { useBoolean } from "./useBoolean";
import { useCallApi } from "./useCallApi";
import { useDebounceInput } from "./useDebounce";

export const useSearchSick = () => {
  const [searchValue, setSearchValue] = useState("");
  const [autoSearchList, setAutoSearchList] = useState<SickListType>([]);

  const { isBoolean: isFocus, setTrue, setFalse } = useBoolean();
  const { inputValue } = useDebounceInput(searchValue);
  const { start, result, reset, isLoading } = useCallApi(
    searchAPI.get,
    inputValue
  );

  const resetAutoList = () => setAutoSearchList([]);

  useEffect(() => {
    if (!inputValue) {
      reset();
      return;
    }
    start();
  }, [inputValue]);

  useEffect(() => {
    if (!result) {
      resetAutoList();
      return;
    }
    setAutoSearchList([...result]);
  }, [result]);

  const onChange = (e: OnChangeEvent) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return {
    searchValue,
    setSearchValue,
    onChange,
    autoSearchList,
    isLoading,
    isFocus,
    setTrue,
    setFalse,
  };
};
