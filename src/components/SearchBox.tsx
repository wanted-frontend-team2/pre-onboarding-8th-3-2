/* eslint-disable no-alert */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import RecommendedWords from "./RecommendedWords";
import { SearchResultType } from "../types";
import useDebounce from "../hook/debouncer";

function SearchBox(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const debouncedInput = useDebounce(
    inputValue,
    Number(process.env.REACT_APP_DEBOUNCING_TIME)
  );
  const focusRef = useRef<any>(null);
  const listRef = useRef<any>(null);

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ADDRESS}?q=${debouncedInput}`
        );
        setSearchResults(response.data);
        console.info("calling api");
      } catch (e) {
        if (e instanceof Error) {
          alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
        }
      }
    };
    if (debouncedInput) {
      getSearchResults();
      return;
    }
    setSearchResults([]);
  }, [debouncedInput]);

  function onKeyUpHandler(e: any) {
    if (searchResults.length === 0) {
      return;
    }
    if (e.key === "ArrowDown") {
      if (
        listRef.current &&
        listRef.current.childElementCount === focusIndex + 1
      ) {
        setFocusIndex(0);
        return;
      }
      setFocusIndex((index) => index + 1);
    }
    if (e.key === "ArrowUp") {
      if (focusIndex === -1) {
        setFocusIndex(searchResults.length - 1);
        return;
      }
      setFocusIndex((index) => index - 1);
    }
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={onKeyUpHandler}
      />
      <RecommendedWords
        results={searchResults}
        inputValue={inputValue}
        listRef={listRef}
        focusIndex={focusIndex}
        focusRef={focusRef}
      />
    </>
  );
}

export default SearchBox;
