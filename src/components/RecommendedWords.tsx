import { SearchResultType } from "../types";
import BoldMatchParts from "./BoldMatchParts";

function RecommendedWords({
  results,
  inputValue,
}: {
  results: SearchResultType[];
  inputValue: string;
}): JSX.Element {
  return (
    <ul>
      {results.length > 0 ? (
        results.map(({ sickCd, sickNm }) => (
          <li key={sickCd}>{BoldMatchParts(inputValue, sickNm)}</li>
        ))
      ) : (
        <div>검색어 없음</div>
      )}
    </ul>
  );
}

export default RecommendedWords;
