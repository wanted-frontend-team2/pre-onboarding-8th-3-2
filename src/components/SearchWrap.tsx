import { ChangeEvent, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import { SickType } from "../types";
import { getSickResult } from "../api/getSearch";

function SearchWrap() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<SickType[]>([]);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText.trim().length === 0) return;
    const debounce = setTimeout(async () => {
      const data = await getSickResult(searchText);
      setSearchResult(data);
      // eslint-disable-next-line no-console
      console.info("calling api");
    }, 500);
    // eslint-disable-next-line consistent-return
    return () => clearTimeout(debounce);
  }, [searchText]);

  return (
    <div className="flex justify-center pt-20 w-screen h-screen bg-sky">
      <div className="w-128">
        <h1 className="text-4xl font-bold text-center">
          <span className="block">국내 모든 임상시험 검색하고</span>
          <span className="block mt-5">온라인으로 참여하기</span>
        </h1>
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          handleChangeText={handleChangeText}
        />
        {searchText && (
          <SearchList searchText={searchText} searchResult={searchResult} />
        )}
      </div>
    </div>
  );
}

export default SearchWrap;
