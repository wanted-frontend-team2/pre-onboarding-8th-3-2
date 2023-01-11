import { useState, useEffect } from "react";
import useModal from "../hooks/useModal";
import useFetch from "../hooks/useFetch";
import SearchBar from "./util/SearchBar";
import SuggestedSearchTerm from "./util/SuggestedSearchWord";

export default function DiseaseSearch() {
  const [searchTarget, setSearchTarget] = useState("");
  const [suggestedWords, setSuggestedWords] = useState([]);
  const [suggestVisible, showSuggest, hideSuggest] = useModal();

  useEffect(() => {
    if (searchTarget.trim().length > 0) {
      showSuggest();
      useFetch(`sick?q=${searchTarget}`).then((data) =>
        setSuggestedWords(data)
      );
    } else {
      hideSuggest();
    }
  }, [searchTarget]);

  return (
    <div className="relative w-full pb-52">
      <SearchBar
        searchTarget={searchTarget}
        setSearchTarget={setSearchTarget}
        onSubmit={() => alert(`temp submit${searchTarget}`)}
        placeholder="질환명을 입력해 주세요."
      />
      {suggestVisible && (
        <SuggestedSearchTerm
          searchTarget={searchTarget}
          suggestedWords={suggestedWords}
        />
      )}
    </div>
  );
}
