import { SearchResultType } from "../types";
import boldMatchParts from "../util/boldMatchParts";

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
          <li key={sickCd}>
            <span>{boldMatchParts(inputValue, sickNm)[0]}</span>
            <span className="font-bold">{inputValue}</span>
            <span>{boldMatchParts(inputValue, sickNm)[1]}</span>
          </li>
        ))
      ) : (
        <div>검색어 없음</div>
      )}
    </ul>
  );
}

export default RecommendedWords;
