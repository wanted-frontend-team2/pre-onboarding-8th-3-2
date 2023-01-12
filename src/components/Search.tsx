import {useEffect, useState} from "react";

import {useDebounce} from "../hooks/useDebounce";
import {SearchResultType} from "../types";
import getSearchResults from "../util/api";
import Recommendations from "./Recommendations";
import SearchInput from "./SearchInput";

function Search() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const setTrue = () => setIsLoading(true);
  const setFalse = () => setIsLoading(false);

  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    if (inputValue) {
      setTrue();
      return;
    }

    setFalse();
  }, [inputValue]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const {state, data} = await getSearchResults(debouncedValue);
      if (state === "success") setSearchResults(data);
      setFalse();
    };

    if (debouncedValue) {
      setTrue();
      fetchSearchResults();
      return;
    }

    setSearchResults([]);
  }, [debouncedValue]);

  return (
    <section>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <Recommendations
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchResults={searchResults}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Search;
