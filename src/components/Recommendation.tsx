import { SearchResultType } from "../types";

function Recommendation({
  results,
  inputValue,
}: {
  results: SearchResultType[];
  inputValue: string;
}): JSX.Element {
  function renderLi() {
    if (results.length > 0) {
      return results.map(({ sickCd, sickNm }) => (
        <li key={sickCd}>{sickNm}</li>
      ));
    }
    if (inputValue) {
      return <div>검색어 없음</div>;
    }
    return "";
  }
  return <ul>{renderLi()}</ul>;
}

export default Recommendation;
