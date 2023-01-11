import { useEffect, useState } from "react";

import { searchAPI } from "src/apis";
import type { OnChangeEvent } from "src/types/onEvent.type";
import type { SickListType } from "src/types/sick.type";

import { useBoolean } from "./useBoolean";
import { useCallApi } from "./useCallApi";
import { useDebounceInput } from "./useDebounce";

export const useSearchSick = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState<SickListType>([]);

  const { isBoolean: isFocus, setTrue, setFalse } = useBoolean();
  const { inputValue } = useDebounceInput(searchValue);
  const { start, result, reset, isLoading } = useCallApi(
    searchAPI.get,
    inputValue
  );

  useEffect(() => {
    if (!inputValue) {
      reset();
      return;
    }
    start();
  }, [inputValue]);

  useEffect(() => {
    if (!result) {
      return;
    }
    setSearchList([...result]);
  }, [result]);

  const onChange = (e: OnChangeEvent) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return {
    searchValue,
    setSearchValue,
    onChange,
    searchList,
    isLoading,
    isFocus,
    setTrue,
    setFalse,
  };
};
