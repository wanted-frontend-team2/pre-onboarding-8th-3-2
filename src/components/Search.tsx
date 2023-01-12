import { useEffect, useState } from "react";
import Recommendation from "./Recommendation";
import { SearchResultType } from "../types";
import getSearchResults from "../util/api";

function Search(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const { state, data } = await getSearchResults(inputValue);
      if (state === "success") {
        setSearchResults(data);
      }
    };
    if (inputValue) {
      fetchSearchResults();
      return;
    }
    setSearchResults([]);
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Recommendation results={searchResults} inputValue={inputValue} />
    </>
  );
}

export default Search;
