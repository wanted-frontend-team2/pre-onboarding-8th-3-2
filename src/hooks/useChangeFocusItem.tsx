import { useEffect, useState } from "react";

import type { SickListType } from "src/types/sick.type";
import { useControlKeyboard } from "./useControlKeyboard";

const MIN_INDEX = -1;

export const useChangeFocusItem = (
  searchValue: string,
  result: SickListType
) => {
  const [focusIndex, setFocusIndex] = useState(MIN_INDEX);
  const maxIndex = result.length - 1;

  const resetFocusIndex = () => setFocusIndex(MIN_INDEX);
  const plusIndex = () => {
    if (focusIndex === maxIndex) return;
    setFocusIndex(focusIndex + 1);
  };

  const minusIndex = () => {
    if (focusIndex === MIN_INDEX) return;
    setFocusIndex(focusIndex - 1);
  };

  useEffect(() => {
    if (!result.length) resetFocusIndex();
  }, [result]);

  useEffect(() => {
    resetFocusIndex();
  }, [searchValue]);

  const { onKeyDown } = useControlKeyboard({
    ArrowUp: minusIndex,
    ArrowDown: plusIndex,
    Enter: () => alert(`${result[focusIndex].sickNm}을 검색합니다.`),
  });

  return {
    focusIndex,
    onKeyDown,
  };
};
