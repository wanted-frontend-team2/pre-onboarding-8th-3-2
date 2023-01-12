import { useEffect, useRef } from "react";
import { SearchResultType } from "../types";
import BoldMatchParts from "./BoldMatchParts";

function RecommendedWords({
  results,
  inputValue,
  listRef,
  focusIndex,
}: {
  results: SearchResultType[];
  inputValue: string;
  listRef: React.LegacyRef<HTMLUListElement>;
  focusIndex: number;
}): JSX.Element {
  const focusRef = useRef<any>(null);

  useEffect(() => {
    focusRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusIndex]);

  function renderWord() {
    if (results.length > 0) {
      return results.map(({ sickCd, sickNm }, index) => (
        <li
          key={sickCd}
          ref={index === focusIndex ? focusRef : undefined}
          className={index === focusIndex ? "bg-sky-100	" : ""}
        >
          {BoldMatchParts(inputValue, sickNm)}
        </li>
      ));
    }
    if (inputValue) {
      return <div>검색어 없음</div>;
    }
    return "";
  }
  return (
    <ul
      ref={listRef}
      className="rounded bg-slate-100 leading-8 p-2 h-[70vh] overflow-auto"
    >
      {renderWord()}
    </ul>
  );
}

export default RecommendedWords;
