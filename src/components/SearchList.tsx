import { AiOutlineSearch } from "react-icons/ai";
import { SickType } from "../types";

interface Props {
  searchText: string;
  searchResult: SickType[];
}
function SearchList({ searchText, searchResult }: Props) {
  const findSearchText = (text: string) => {
    const reg = new RegExp(searchText, "g");
    return text.replace(
      reg,
      `<span style="color: #3F51B5; font-weight:bold">${searchText}</span>`
    );
  };

  return (
    <div className="max-h-96 mt-3 px-7 py-5 rounded-2xl bg-white overflow-auto">
      <p className="font-bold">{searchText}</p>
      <h2 className="mt-2 text-sm text-grayB">추천 검색어</h2>
      <ul className="mt-2">
        {searchResult.length !== 0 ? (
          searchResult.map((sickData) => (
            <li
              className="flex items-center my-1 hover:bg-grayE cursor-pointer"
              key={sickData.sickCd}
            >
              <AiOutlineSearch className="flex-none text-grayB mr-1" />
              <span
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: findSearchText(sickData.sickNm),
                }}
              />
            </li>
          ))
        ) : (
          <li>데이터가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchList;
