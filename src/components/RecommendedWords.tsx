import { SearchResultType } from "../types";
import BoldMatchParts from "./BoldMatchParts";

function RecommendedWords({
  results,
  inputValue,
  listRef,
  focusIndex,
  focusRef,
}: {
  results: SearchResultType[];
  inputValue: string;
  listRef: any;
  focusIndex: number;
  focusRef: any;
}): JSX.Element {
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
    <ul ref={listRef} className="rounded bg-slate-100 leading-8 p-2">
      {renderWord()}
    </ul>
  );
}

export default RecommendedWords;
