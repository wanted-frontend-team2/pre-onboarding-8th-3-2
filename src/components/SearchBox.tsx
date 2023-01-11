/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ADDRESS}?q=${inputValue}`
        );
        setSearchResults(response.data);
      } catch (error: any) {
        alert(
          `통신에 실패했습니다. 다시 시도해주세요: ${error.response.data.message}`
        );
      }
    };
    if (inputValue) getSearchResults();
  }, [inputValue]);

  return (
    <form>
      <input
        type="text"
        name="searchWord"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default SearchBox;
