import { SearchResultType } from "../types";

function RecommendedWords({
  results,
}: {
  results: SearchResultType[];
}): JSX.Element {
  return (
    <ul>
      {results &&
        results.map((result: any) => (
          <li key={result.sickCd}>{result.sickNm}</li>
        ))}
    </ul>
  );
}

export default RecommendedWords;
