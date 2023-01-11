/* eslint-disable no-alert */
import { useEffect, useState } from "react";
import axios from "axios";
import RecommendedWords from "./RecommendedWords";

function SearchBox(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<[]>([]);

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ADDRESS}?q=${inputValue}`
        );
        setSearchResults(response.data);
      } catch (e) {
        if (e instanceof Error) {
          alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
        }
      }
    };
    if (inputValue) getSearchResults();
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <RecommendedWords results={searchResults} inputValue={inputValue} />
    </>
  );
}

export default SearchBox;
