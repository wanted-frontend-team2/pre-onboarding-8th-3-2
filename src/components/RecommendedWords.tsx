/* eslint-disable no-console */
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
  return (
    <ul ref={listRef}>
      {results.length > 0 ? (
        results.map(({ sickCd, sickNm }, index) => (
          <li
            key={sickCd}
            ref={index === focusIndex ? focusRef : undefined}
            className={index === focusIndex ? "bg-slate-100	" : ""}
          >
            {BoldMatchParts(inputValue, sickNm)}
          </li>
        ))
      ) : (
        <div>검색어 없음</div>
      )}
    </ul>
  );
}

export default RecommendedWords;
