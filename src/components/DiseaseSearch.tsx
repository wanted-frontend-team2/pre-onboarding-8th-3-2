import { useState, useEffect } from "react";
import useModalState from "../hooks/useModalState";
import useFetch from "../hooks/useFetch";
import SearchBar from "./util/SearchBar";
import SuggestedSearchWord from "./util/SuggestedSearchWord";

export default function DiseaseSearch() {
  const maxSuggestion = 7;

  const [searchTarget, setSearchTarget] = useState("");
  const [suggestedWords, setSuggestedWords] = useState([]);
  const [suggestVisible, showSuggest, hideSuggest] = useModalState();

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const increaseSelectedIndex = () => {
    const lastIndex =
      suggestedWords.length > maxSuggestion
        ? maxSuggestion - 1
        : suggestedWords.length - 1;
    if (selectedIndex >= lastIndex) setSelectedIndex(0);
    else setSelectedIndex((prevIndex) => prevIndex + 1);
  };

  const decreaseSelectedIndex = () => {
    const lastIndex =
      suggestedWords.length > maxSuggestion
        ? maxSuggestion - 1
        : suggestedWords.length - 1;
    if (selectedIndex <= 0) setSelectedIndex(lastIndex);
    else setSelectedIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (searchTarget.trim().length > 0) {
      showSuggest();
      useFetch(`sick?q=${searchTarget}`).then((data) =>
        setSuggestedWords(data)
      );
    } else {
      hideSuggest();
    }
    setSelectedIndex(-1);
  }, [searchTarget]);

  return (
    <div className="relative w-full pb-52">
      <SearchBar
        searchTarget={searchTarget}
        setSearchTarget={setSearchTarget}
        onSubmit={() => {}}
        onArrowKeyDown={[decreaseSelectedIndex, increaseSelectedIndex]}
        placeholder="질환명을 입력해 주세요."
      />
      {suggestVisible && (
        <SuggestedSearchWord
          searchTarget={searchTarget}
          suggestedWords={suggestedWords}
          selectedIndex={selectedIndex}
          maxSuggestion={maxSuggestion}
        />
      )}
    </div>
  );
}
